import React from "react";

import ButtonBar from "../components/ButtonBar/";
import Home from "../components/Home/";
import Order from "../components/Order/";


/**
 * @constructor Main 
 * 
 * @description 主入口文件
 */
class Main extends React.PureComponent {

    render() {
        return (
            <>
                <Order />
                <ButtonBar />
            </>
        );
    }
}

export default Main;