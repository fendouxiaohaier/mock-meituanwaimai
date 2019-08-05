import "./index.scss";

import React, { PureComponent } from 'react';
import {connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

import ListItem from "./ListItem/";

/**
 * @constructor Order
 * 
 * @description 订单tab组件 
 */
class Order extends PureComponent {

    render() {

        let {
            orderList
        } = this.props;

        return (
            <div className="order">

                <div className="order-header">订单</div>

                {
                    this.renderOrderList(orderList.toJS())
                }

            </div>
        );
    }

    componentDidMount() {
        this.props.fetchOrderData();
    }

    renderOrderList(orderList) {
        return orderList.map((order) => {
            return <ListItem key={order.order_id}  itemData={order} />
        });
    }

    
}

const mapState = (state) => ({
    orderList: state.getIn(["order", "orderList"]),
});

const mapDispatch = (dispatch) => ({
    fetchOrderData() {
        dispatch( actionCreators.getFetchOrderAction() );
    }
});

export default connect(mapState, mapDispatch)(Order);