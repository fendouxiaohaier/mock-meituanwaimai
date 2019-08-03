import "./index.scss";

import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import * as actionCreators from "../store/actionCreators";

/**
 * @constructor <Category>
 * 
 * @description 分类查询组件
 */

class Category extends PureComponent {
   
    render() {
        let {
            categorys
        } = this.props;

        categorys =  this.getCountCategory(categorys, 8);

        return (
            <div className="category-content">
                {
                    categorys.map((category) => {
                       return (
                           <div className="category-item" key={category.name}>
                               <div className="item-icon">
                                   <img className="icon-img" src={category.url} alt={category.name} />
                               </div>
                               <p className="item-name">{category.name}</p>
                           </div>
                       ) 
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchHead();
    }

    getCountCategory(categorys, count) {
        categorys = categorys.toJS();

        if(categorys.length <= count) {
            return categorys;
        }

        let categorysLen = categorys.length;
        let targetCategorys = [];
        let startIndex = Math.floor(Math.random()*categorys.length);

        while(count-- > 0) {
            targetCategorys.push( categorys[startIndex++ % categorysLen] );
        }

        return targetCategorys;
    }
}

const mapSate = (state) => ({
    categorys: state.getIn(["home", "categorys"]),
});

const mapDispatch = (dispatch) => ({
    fetchHead() {
        dispatch(actionCreators.getFetchHeadAction());
    }
});

export default connect(mapSate, mapDispatch)(Category);