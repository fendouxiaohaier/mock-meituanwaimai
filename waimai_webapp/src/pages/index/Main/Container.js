import { hot } from "react-hot-loader";

import React from "react";

import Main from "./index";

class Container extends React.Component {
    render() {
        return (<Main/>);
    }
}

export default hot(module)(Container);