import React from "react";

import ButtonBar from "../components/ButtonBar/";
import Home from "../components/Home/";
import Order from "../components/Order/";
import My from "../components/My/";


/**
 * @constructor Main 
 * 
 * @description 主入口文件
 */
class Main extends React.PureComponent {

    render() {
        return (
            <>
                <My />
                <ButtonBar />
            </>
        );
    }
}

export default Main;