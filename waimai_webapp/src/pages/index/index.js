// 引入全局初始化样式
import "../../reset.css";
import "../../static/iconfont/iconfont.css";
import "../../static/iconfont/iconfont.js";
import "../../static/rem";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/";

import Main from "./Main/";

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,

    document.querySelector("#root")
);

