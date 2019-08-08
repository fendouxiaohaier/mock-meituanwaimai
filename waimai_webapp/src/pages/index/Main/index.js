import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Order" component={Order}></Route>
                    <Route exact path="/my" component={My}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
                <ButtonBar />
            </BrowserRouter>
        );
    }
}

export default Main;