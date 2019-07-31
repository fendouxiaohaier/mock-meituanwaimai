import "./index.scss";

import React from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

/**
 * @constructor ButtonBar
 * 
 * @description 底部导航条
 */
class ButtonBar extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleChangeActiveTab = this.handleChangeActiveTab.bind(this);
    }

    render() {

        let {
            buttonTabs,
            activeTabKey
        } = this.props;

        return (
            <div className="button-bar">
                {
                    this.generateButtonTabs(buttonTabs, activeTabKey)
                }
            </div>
        );
    }

    generateButtonTabs(buttonTabs, activeTabKey) {
        return buttonTabs.map((tab)=>{
            let tabItemCls = `${tab.key} tab-item`,
                iconID = tab.icon;

            if(activeTabKey === tab.key) {
                tabItemCls += " active";
                iconID = tab.iconActive;
            }

            return (
                <div className={tabItemCls} 
                    key={tab.key} 
                    data-key={tab.key}
                    onClick={this.handleChangeActiveTab}
                >
                    <div className="tab-icon">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref={iconID}></use>
                        </svg>
                    </div>
                    <div className="tab-name">{tab.name}</div>
                </div>
            )
        })
    }

    handleChangeActiveTab(event) {
        let activeTabKey = event.currentTarget.dataset.key;

        this.props.handleChangeActiveTab(activeTabKey);
    }
}

const stateMap = (state) => ({
    buttonTabs: state.getIn(["buttonBar", "buttonTabs"]).toJS(),
    activeTabKey: state.getIn(["buttonBar", "activeTabKey"]),
});

export const dispatchMap = (dispatch) => ({
    handleChangeActiveTab(activeTabKey) {
        dispatch( actionCreators.getChangeActiveTabAction(activeTabKey) );
    }
});

export default connect(stateMap, dispatchMap)(ButtonBar);