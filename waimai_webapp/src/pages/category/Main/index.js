import React, { PureComponent } from 'react';

import NavHeader from "../../../common/NavHeader/";
import Header from "../components/Header/";
import ContentList from "../components/Content/";

class Main extends PureComponent {
    render() {
        return (
            <div>
                <NavHeader title="分类"/>
                <Header />
                <ContentList />
            </div>
        );
    }
}

export default Main;