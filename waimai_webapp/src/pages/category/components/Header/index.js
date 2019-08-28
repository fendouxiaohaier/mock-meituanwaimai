import "./index.scss";

import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

import CategoryComponent from "./components/CategoryComponent/";
import SortComponent from "./components/SortComponent/";
import FilterComponent from "./components/FilterComponent/";

import { getFetchContetListAction } from "../Content/store/actionCreators";

/**
 * @constructor <Header>
 * 
 * @description 头部帅选组件
 */
class Header extends Component {

    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);
        this.renderPanelContent = this.renderPanelContent.bind(this);
        this.handleFilterContent = this.handleFilterContent.bind(this);
    }


    render() {

        let {
            items,
            activeKey,
            filterData,
            showHeaderPanel,
        } = this.props;

        items = items.toJS();
        filterData = filterData.toJS();
        
        return (
            <div className="header">
                <div className="header-top">
                    {
                        this.renderHeaderItems( Object.values(items), activeKey)   
                    }
                </div>

                {
                    showHeaderPanel 
                    && 
                    this.getHeaderPanel(filterData, activeKey, items)
                }
               
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchFilterData();
    }

    getHeaderPanel(filterData, activeKey, items) {
        return (
            <div className="header-panel">
                <div className="header-inner-panel">
                    {
                        this.renderPanelContent(filterData, activeKey, items)
                    }
                </div>
            </div>
        )

        return null;
    }

    renderHeaderItems(items, activeKey) {
        return items.map((item) => (
            <div key={item.key} 
                className={`header-item ${item.key===activeKey?"active":""}`}
                data-key={item.key}
                onClick={this.handleTabClick}
            >
                <p className="item-text">{item.text}</p>
                <div className="item-icon"></div>
            </div>
        )); 
    }

    handleTabClick(event) {
        let activeKey = event.currentTarget.dataset.key;

        let showHeaderPanel = true;

        // 如果当前点击的tab是正在显示的tab，则关闭header-panel并清空activeKey
        if(activeKey === this.props.activeKey
            && this.props.showHeaderPanel) {
                showHeaderPanel = false;
                activeKey = "";
        }

        this.props.changeTab(activeKey, showHeaderPanel);
    }

    /**
     * 针对不同的activeKey，渲染不同的内容组件
     */
    renderPanelContent(filterData, activeKey, items) {
       
        if(activeKey === "category") {
            return (<CategoryComponent 
                        categoryFilterList={filterData.category_filter_list}
                        handleFilterContent={this.handleFilterContent}
                        filterID={items[activeKey].filterID}
                    />)
        } else if( activeKey === "sort") {
            return (<SortComponent 
                        sortTypeList={filterData.sort_type_list}
                        handleFilterContent={this.handleFilterContent}
                        filterID={items[activeKey].filterID}
                    />);
        } else {
            return (<FilterComponent 
                        activityFilterList={filterData.activity_filter_list}
                        handleFilterContent={this.handleFilterContent}
                        filterID={items[activeKey].filterID}    
                    />);
        }
    }

    handleFilterContent(event) {
        let filterID = event.currentTarget.dataset.id;
        let type = event.currentTarget.dataset.type;

        // 当前点击的不是同一个过滤条件时，再去请求过滤后的内容数据
        if(this.props.items.toJS()[type].filterID !== filterID) {

            // 调用过滤查询借口
            this.props.handleDoFilter(filterID, type);
 
            // 从header这里点击过滤附近商家数据需要传递过滤参数，
            // 以及把page还原为第一页
            this.props.fetchContentList({
                filterID,
                toFirstPage: true
            });
        }

        // 点击触发过滤条件后，关闭条件选择面板
        this.props.changeTab("", false);
    }
}

const mapState = (state) => ({
    items: state.getIn(["header", "items"]),
    activeKey: state.getIn(["header", "activeKey"]),
    filterData: state.getIn(["header", "filterData"]),
    showHeaderPanel: state.getIn(["header", "showHeaderPanel"]),
});

const mapDispatch = (dispatch) => ({
    changeTab(activeKey, showHeaderPanel) {
        dispatch( actionCreators.getchangeTabAction(activeKey, showHeaderPanel) )
    },
    fetchFilterData() {
        dispatch( actionCreators.getFetchFilterDataAction() );
    },
    handleDoFilter(filterID, type) {
        dispatch( actionCreators.getDoFilterAction(filterID, type) );
    },
    fetchContentList(filterParam) {
        dispatch( getFetchContetListAction(filterParam) );
    }
});

export default connect(mapState, mapDispatch)(Header);
