import "./index.scss";

import React from "react";


/**
 * @constructor <FilterComponent>
 * @description 筛选组件
 */

const FilterComponent = ({activityFilterList}) => {
    
    activityFilterList = activityFilterList || [];

    return (
        <div className="filter">
            {
                activityFilterList.map((filterItem, index) => (
                    <div key={index} className="filter-item-box">
                        <div className="title">{filterItem.group_title}</div>
                        {renderFilterChoice(filterItem.items, filterItem.support_multi_choice)}
                    </div>
                ))
            }
        </div>
    );

}


/**
 * @param items 可供选择的条目
 * @param supportMultiChoice 是否可以多选 0:不可多选 1:可多选
 */
const renderFilterChoice = (items, supportMultiChoice) => {

    return (
        <div className="choiceBox">
            {
                items.map((choiceItem) => (
                    <div key={choiceItem.name} className="chioce-item">
                        {
                            choiceItem.icon && <img className="choiceItemImg" src={choiceItem.icon}/>
                        }
                        {choiceItem.name}
                    </div>
                ))
            }
        </div>
    );

}

 export default React.memo(FilterComponent);