import "./index.scss";

import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "../store/actionCreators";

import ContentItem from "./ContentItem/";
import Loading from "../../../../../common/Loading/";

/**
 * @constructor ContentList
 * 
 * @description 附件商家内容列表
 */

class ContentList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoadEnd: false  // 是否加载完成
        };


        this.curPage = 1;  // 当前加载到第几页了

        this.loadSrcollData = this.loadSrcollData.bind(this);
    }
    
    render() {

        let {
            contentList
        } = this.props;


        return (
            <div className="content-list">
                
                <div className="list-title">
                    <span className="title-text">附近商家</span>    
                </div>

                <div className="list-items">
                    {
                        contentList.toJS().map((content) => {
                            return <ContentItem key={content.id} itemData={content}/>
                        })
                    }

                </div>

                <Loading isLoadEnd={this.state.isLoadEnd}/>

            </div>
        );
    }

    componentDidMount() {
        this.props.fetchContentList();

        // 添加window的滚动事件
        window.addEventListener("scroll", this.loadSrcollData);
    }

    componentWillUnmount() {
         // 移除window的滚动事件
         window.removeEventListener("scroll", this.loadSrcollData);
    }

    loadSrcollData() {

        if(this.curPage < 3) {
            let clientHeight = document.documentElement.clientHeight,
                scrollTop = document.documentElement.scrollTop,
                scrollHeight = document.documentElement.scrollHeight;

            let preloadDistantce = 30;

            if(clientHeight+scrollTop+preloadDistantce >= scrollHeight) {
                this.curPage++;
                this.props.fetchContentList();
            }

        } else {
            this.setState({
                isLoadEnd: true
            });
        }


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