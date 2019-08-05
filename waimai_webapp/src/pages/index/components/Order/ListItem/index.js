import "./index.scss";

import React, { PureComponent } from 'react';

class ListItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let {
            itemData
        } = this.props;

        return (
            <div className="order-item">

                <div className="item-content">
                    
                    <div className="item-img">
                        <img src={itemData.poi_pic} alt="商家头像"/> 
                    </div>

                    <div className="item-info">
                        <div className="info-header">
                            <p className="header-name">{itemData.poi_name}</p>
                            <p className="header-arrow"></p>
                            <p className="header-status">{itemData.status_description}</p>
                        </div>
                        <div className="info-product-list">
                            <ul>
                                {
                                    itemData.product_list.map((product) => (
                                        <li className="product-list" key={product.product_name}>
                                            <span className="product-name">{product.product_name}</span>
                                            <span>x{product.product_count}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="info-totle">
                            <span>...</span>
                            <span className="totle-price">
                                总价{itemData.product_list.length}个菜，
                                实付￥{itemData.total}
                            </span>
                        </div>
                    </div>
                </div>
            
                <div className="item-comment">
                    <button className="comment-btn">评价</button>
                </div>
            
            </div>
        );
    }
}

export default ListItem;