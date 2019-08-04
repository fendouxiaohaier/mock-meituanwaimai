import "./index.scss";

import React, { PureComponent } from 'react';

class Loading extends PureComponent {
    render() {

        let loadingText = this.props.isLoadEnd ? "已完成": "加载中";

        return (
            <div className="loading">
               {loadingText} 
            </div>
        );
    }
}

export default Loading;