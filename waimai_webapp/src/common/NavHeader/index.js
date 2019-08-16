import "./index.scss";

import React, { PureComponent } from 'react';

class NavHeader extends PureComponent {
    render() {
        return (
            <div className="nav">
                <div className="backon-icon">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-jiantou"></use>
                    </svg>
                </div>
                <p className="title">{this.props.title}</p>
            </div>
        );
    }
}

export default NavHeader;