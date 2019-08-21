import "./index.scss";

import React from "react";

/**
 * @constructor <CategoryComponent>
 * 
 * @description 全部分类组件
 */
const CategoryComponent = ({categoryFilterList}) => {
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
                                renderSubCategoryList(cate.sub_category_list)
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};


const renderSubCategoryList = (subCategoryList=[]) => {
    return subCategoryList.map((subItem) => {
        return (
            <div className="cate-sub-item" key={subItem.name}>
                {subItem.name}{subItem.quantity}
            </div>
        );
    });
}

export default CategoryComponent;