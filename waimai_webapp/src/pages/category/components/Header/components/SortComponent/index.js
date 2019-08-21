import "./index.scss";

import React from "react";

/**
 * @constructor <SortComponent>
 * @description 综合排序组件
 */
const SortComponent = ({sortTypeList}) => {
    sortTypeList = sortTypeList || [];

    return (
        <div className="sort-filter">
            <ul className="list">
                {
                    sortTypeList.map((listItem) => (
                        <li key={listItem.name} 
                            className="list-item"
                        >
                            <span>{listItem.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SortComponent;