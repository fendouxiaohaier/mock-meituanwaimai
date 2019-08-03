import "./index.scss";

import React, { PureComponent } from 'react';

class ContentItem extends PureComponent {
    render() {
        let {
            itemData
        } = this.props;

        return (
            <div className="list-item">
                
                <div className="item-brand-img">
                    <img src={itemData.pic_url} alm="商家招牌"/>
                    {
                        itemData.poi_type_icon
                        &&
                        <img className="brand-poi-type-icon" src={itemData.poi_type_icon} alm="招牌类型"/>
                    }
                </div>
                
                <div className="item-info">
                    <div className="info-name">{itemData.name}</div>
                    
                    <div className="info-sale">
                        <div className="sale-score-count">
                            <span className="sale-score">
                                { "★★★★★☆☆☆☆☆".slice(5-Math.round(itemData.wm_poi_score),10-Math.round(itemData.wm_poi_score))}
                            </span>
                            {" "}
                            <span>{`月售${itemData.month_sale_num>999?"999+": itemData.month_sale_num}`}</span>
                        </div>

                        <div className="sale-deliver">
                            <span>{itemData.mt_delivery_time}</span>
                            {" | " }
                            <span>{itemData.distance}</span>
                        </div>
                    </div>
                    
                    <div className="info-price">
                        <div className="info-min-price">
                            <span>{itemData.min_price_tip}</span>
                            {" | " }
                            <span>{itemData.mt_delivery_time}</span>
                        </div>

                        <div className="info-mt-deliver">
                            {
                                itemData.delivery_type 
                                ? (<p className="mt-deliver-icon">美团专送</p>)
                                : (null)
                            }
                        </div>
                    </div>

                    <div className="info-discounts">
                        {
                            Array.isArray( itemData.discounts2 )
                            &&
                            itemData.discounts2.map((discount) => {
                                return (
                                    <div key={discount.id} className="discount-desc">
                                        <img className="discount-icon" src={discount.icon_url} alt=""/>
                                        <span className="discount-info">{discount.info}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default ContentItem;