import "./index.scss";

import React from "react";


/**
 * @constructor <FilterComponent>
 * @description 筛选组件
 */

const FilterComponent = ({activityFilterList, handleFilterContent, filterID}) => {
    
    activityFilterList = activityFilterList || [];

    return (
        <div className="filter">
            {
                activityFilterList.map((filterItem, index) => (
                    <div key={index} className="filter-item-box">
                        <div className="title">{filterItem.group_title}</div>
                        {renderFilterChoice(filterItem.items, handleFilterContent, filterID)}
                    </div>
                ))
            }
        </div>
    );

}


/**
 * @param items 可供选择的条目
 * @param handleFilterContent 过滤选项单击回调事件
 * @param filterID store中保存的当前选中的项
 */
const renderFilterChoice = (items, handleFilterContent, filterID) => {

    return (
        <div className="choiceBox">
            {
                items.map((choiceItem) => {
                    let cls  = "chioce-item";
                    if(""+choiceItem.code === filterID) {
                        cls += " active";
                    }

                    return (
                        <div key={choiceItem.name} 
                                className={cls} 
                                onClick={handleFilterContent}
                                data-id={choiceItem.code}
                                data-type="filter"
                        >
                            {
                                choiceItem.icon && <img className="choiceItemImg" src={choiceItem.icon}/>
                            }
                            {choiceItem.name}
                        </div>
                    )
                })
            }
        </div>
    );

}

 export default React.memo(FilterComponent);