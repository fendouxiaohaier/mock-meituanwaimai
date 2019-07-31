import { hot } from "react-hot-loader";

import React from "react";

import Main from "./index";

/**
 * 用于React热更新
 */
class Container extends React.Component {
    render() {
        return (<Main/>);
    }
}

export default hot(module)(Container);