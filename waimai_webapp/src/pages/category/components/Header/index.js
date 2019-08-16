import "./index.scss";

import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

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
            activeKey
        } = this.props;

        items = items.toJS();

        return (
            <div className="header">
                <div className="header-top">
                    {
                        this.renderHeaderItems(items, activeKey)   
                    }
                </div>
            </div>
        );
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
}

const mapState = (state) => ({
    items: state.getIn(["header", "items"]),
    activeKey: state.getIn(["header", "activeKey"])
});

const mapDispatch = (dispatch) => ({
    changeTab(activeKey) {
        dispatch( actionCreators.getchangeTabAction(activeKey) )
    }
});

export default connect(mapState, mapDispatch)(Header);
