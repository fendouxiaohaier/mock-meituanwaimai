import "./index.scss";

import React from "react";

/**
 * @constructor <CategoryComponent>
 * 
 * @description 全部分类组件
 */
const CategoryComponent = ({categoryFilterList, handleFilterContent, filterID}) => {
    categoryFilterList = categoryFilterList || [];

    return (
        <ul className="category-filter">
            {
                categoryFilterList.map((cate) => (
                    <li className="catetory-item" key={cate.name}>
                        <div className="title">
                            <span className="yellow-bar" />
                            {cate.name}{cate.quantity}
                        </div>
                        <div className="cate-sub-content">
                            {
                                renderSubCategoryList(cate.code, cate.sub_category_list, filterID, handleFilterContent)
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};


const renderSubCategoryList = (uperCateCode, subCategoryList=[], filterID, handleFilterContent) => {
    return subCategoryList.map((subItem) => {
        let cls = "cate-sub-item";

        // 如果过滤条件与当前显示名称相等，则先显示名称上增加active类
        if(filterID === (""+uperCateCode+subItem.code)) {
            cls += " active";
        }

        return (
            <div className={cls} 
                key={subItem.name}
                onClick={handleFilterContent}
                data-id={(""+uperCateCode+subItem.code)}
                data-type="category"  
            >
                {subItem.name}{subItem.quantity}
            </div>
        );
    });
}

export default CategoryComponent;