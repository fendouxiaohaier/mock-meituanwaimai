// 引入全局初始化样式
import "../../reset.css";
import "../../static/iconfont/iconfont.css";
import "../../static/iconfont/iconfont";
import "../../static/rem";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/";

import Conatiner from "./Main/Container";

ReactDOM.render(
    <Provider store={store}>
        <Conatiner/>
    </Provider>,

    document.querySelector("#root")
);

