import "./index.scss";

import React, { Component } from 'react';
import { connect } from "react-redux";

import ScrollView from "../../../../common/ScrollView";
import ContentItem from "./ContentItem/";

import * as actionCreators from "./store/actionCreators";

/**
 * @constructor <ContentList>
 * @description 过滤后的内容列表组件
 */
class ContentList extends Component {

    constructor(props) {
        super(props);

        this.loadSrcollData = this.loadSrcollData.bind(this);
    }


    render() {

        let {
            contentList
        } = this.props;

        return (
            <div className="content-list">
                 <ScrollView isLoadEnd={this.props.isLoadEnd} 
                                scrollCallBack={this.loadSrcollData}>
                    <div className="list-items">
                        {
                            contentList.toJS().map((content, index) => {
                                return <ContentItem key={index} itemData={content}/>
                            })
                        }
                    </div>
                </ScrollView>
            </div>
        );
    }


    componentDidMount() {
        this.props.fetchContentList();
    }

    loadSrcollData() {
        if(this.props.curPage < 3) {
            this.props.fetchContentList();
        }
    }

}

const mapState = (state) => ({
    contentList: state.getIn(["content", "contentList"]),
    curPage: state.getIn(["content", "curPage"]),
    isLoadEnd: state.getIn(["content", "isLoadEnd"])

});

const mapDispacth = (dispatch) => ({
    fetchContentList() {
        dispatch( actionCreators.getFetchContetListAction({}) );
    }
});

export default connect(mapState, mapDispacth)(ContentList);