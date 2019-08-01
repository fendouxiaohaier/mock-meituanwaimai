import "./index.scss";

import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
    render() {
        return (
            <div className="search-bar">
                <div className="bar-location">
                    <div className="location-icon">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                        </svg>
                    </div>
                    <div className="location-text">
                        成都市
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-arrow"></use>
                        </svg>
                    </div>
                </div>
                <div className="search-btn">
                    <div className="btn-placeholder-icon">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-search"></use>
                        </svg>
                    </div>
                    <p>鸡翅</p>
                </div>
            </div>
        );
    }
}

export default SearchBar;