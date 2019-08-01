import "./index.scss";

import React, { PureComponent } from 'react';

import SearchBar from "./SearchBar/";

/**
 * @constructor Header
 * 
 * @description 顶部banner
 */
class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <SearchBar />

                <img className="banner-img"
                    src="http://xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"
                />
            </div>
        );
    }
}

export default Header;