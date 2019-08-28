import "./index.scss";

import React from "react";

/**
 * @constructor <SortComponent>
 * @description 综合排序组件
 */
const SortComponent = ({sortTypeList, handleFilterContent, filterID}) => {
    sortTypeList = sortTypeList || [];

    return (
        <div className="sort-filter">
            <ul className="list">
                {
                    sortTypeList.map((listItem) => {
                        let cls = "list-item";
                        if(filterID === ""+listItem.code) {
                            cls += " active";
                        }
                        
                        return (
                            <li key={listItem.name} 
                                className={cls}
                                onClick={handleFilterContent}
                                data-id={listItem.code}
                                data-type="sort"
                            >
                                <span>{listItem.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SortComponent;