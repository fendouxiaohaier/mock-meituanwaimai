import React, { PureComponent } from 'react';

import Header from "./Header/";
import Category from "./Category/";
import ContentList from "./ContentList/";

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Category />
                <ContentList />
            </div>
        );
    }
}

export default Home;