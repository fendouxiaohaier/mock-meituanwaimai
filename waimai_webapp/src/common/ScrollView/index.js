import React, { PureComponent } from 'react';


import Loading from "../Loading/";

/**
 * @constructor <ScrollView scrollCallBack={function} isLoadEnd={boolean}/>
 * @description 滚动加载组件
 */
class ScrollView extends PureComponent {
    constructor(props) {
        super(props);

        this.loadSrcollData = this.loadSrcollData.bind(this);
    }
        

    render() {
        return (
            <div>
                {this.props.children}
                <Loading isLoadEnd={this.props.isLoadEnd}/>
            </div>
        );
    }

    componentDidMount() {
        // 添加window的滚动事件
        window.addEventListener("scroll", this.loadSrcollData);
    }

    componentWillUnmount() {
         // 移除window的滚动事件
         window.removeEventListener("scroll", this.loadSrcollData);
    }

    loadSrcollData() {
        if(!this.props.isLoadEnd) {
            let clientHeight = document.documentElement.clientHeight,
                scrollTop = document.documentElement.scrollTop,
                scrollHeight = document.documentElement.scrollHeight;

            let preloadDistantce = 30;

            if(clientHeight+scrollTop+preloadDistantce >= scrollHeight) {
                this.props.scrollCallBack && this.props.scrollCallBack();
            }
        }
    }
}

export default ScrollView;