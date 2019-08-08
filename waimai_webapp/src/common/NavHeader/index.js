import "./index.scss";

import React, { PureComponent } from 'react';

class NavHeader extends PureComponent {
    render() {
        return (
            <div className="nav">
                <div className="backon-icon"></div>
                <p className="title">{this.props.title}</p>
            </div>
        );
    }
}

export default NavHeader;