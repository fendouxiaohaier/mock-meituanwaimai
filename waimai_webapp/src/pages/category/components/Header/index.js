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

                <div className="header-panel">
                    <div className="header-inner-panel">
                        {
                            this.renderPanelContent(filterData, activeKey)
                        }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchFilterData();
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

        this.props.changeTab(activeKey);
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
    
});

const mapDispatch = (dispatch) => ({
    changeTab(activeKey) {
        dispatch( actionCreators.getchangeTabAction(activeKey) )
    },
    fetchFilterData() {
        dispatch( actionCreators.getFetchFilterDataAction() );
    }
});

export default connect(mapState, mapDispatch)(Header);
