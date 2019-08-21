import "./index.scss";

import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

import CategoryComponent from "./components/CategoryComponent/";
import SortComponent from "./components/SortComponent/";
import FilterComponent from "./components/FilterComponent/";

/**
 * @constructor <Header>
 * 
 * @description 头部帅选组件
 */
class Header extends Component {

    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);
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
                        this.renderHeaderItems(items, activeKey)   
                    }
                </div>

                {
                    this.getHeaderPanel(filterData, activeKey, showHeaderPanel)
                }
               
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchFilterData();
    }

    getHeaderPanel(filterData, activeKey, showHeaderPanel) {
        if(showHeaderPanel) {
            return (
                <div className="header-panel">
                    <div className="header-inner-panel">
                        {
                            this.renderPanelContent(filterData, activeKey)
                        }
                    </div>
                </div>
            )
        } 

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
    renderPanelContent(filterData, activeKey) {
        if(activeKey === "category") {
            return (<CategoryComponent categoryFilterList={filterData.category_filter_list}/>)
        } else if( activeKey === "sort") {
            return (<SortComponent sortTypeList={filterData.sort_type_list}/>);
        } else {
            return (<FilterComponent activityFilterList={filterData.activity_filter_list}/>);
        }
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
    }
});

export default connect(mapState, mapDispatch)(Header);
