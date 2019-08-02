import React, { PureComponent } from 'react';

import Header from "./Header/";
import Category from "./Category/";

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Category />
            </div>
        );
    }
}

export default Home;