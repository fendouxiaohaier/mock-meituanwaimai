import React from "react";

import ButtonBar from "../components/ButtonBar/";
import Home from "../components/Home/";


/**
 * @constructor Main 
 * 
 * @description 主入口文件
 */
class Main extends React.PureComponent {

    render() {
        return (
            <>
                <Home />
                <ButtonBar />
            </>
        );
    }
}

export default Main;