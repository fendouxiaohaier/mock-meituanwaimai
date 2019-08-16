import React, { PureComponent } from 'react';

import NavHeader from "../../../common/NavHeader/";
import Header from "../components/Header/";

class Main extends PureComponent {
    render() {
        return (
            <div>
                <NavHeader title="分类"/>
                <Header />
            </div>
        );
    }
}

export default Main;