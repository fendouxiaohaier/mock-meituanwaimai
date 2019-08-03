import "./index.scss";

import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "../store/actionCreators";

import ContentItem from "./ContentItem/";

/**
 * @constructor ContentList
 * 
 * @description 附件商家内容列表
 */

class ContentList extends PureComponent {

    
    render() {

        let {
            contentList
        } = this.props;


        return (
            <div className="content-list">
                
                <div className="list-title">
                    <span className="title-text">附近商家</span>    
                </div>

                <div className="content-list">
                    {
                        contentList.toJS().map((content) => {
                            return <ContentItem key={content.id} itemData={content}/>
                        })
                    }

                </div>



            </div>
        );
    }

    componentDidMount() {
        this.props.fetchContentList();
    }
}

const mapState = (state) => ({
    contentList: state.getIn(["home", "contentList"]),
});

const mapDispatch = (dispatch) => ({
    fetchContentList() {
        dispatch( actionCreators.getFetchContetListAction() );
    }
});

export default connect(mapState, mapDispatch)(ContentList);