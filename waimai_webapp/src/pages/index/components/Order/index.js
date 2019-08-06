import "./index.scss";

import React, { PureComponent } from 'react';
import {connect } from "react-redux";

import * as actionCreators from "./store/actionCreators";

import ListItem from "./ListItem/";
import ScrollView from "../../../../common/ScrollView/";
/**
 * @constructor Order
 * 
 * @description 订单tab组件 
 */
class Order extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoadEnd: false
        };

        this.curPage = 1;

        this.scrollCallBack = this.scrollCallBack.bind(this);
    }

    render() {

        let {
            orderList
        } = this.props;

        return (
            <div className="order">

                <div className="order-header">订单</div>

                <ScrollView scrollCallBack={this.scrollCallBack} isLoadEnd={this.state.isLoadEnd}>
                    {
                        this.renderOrderList(orderList.toJS())
                    }
                </ScrollView>

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

    scrollCallBack() {
        if(this.curPage++ < 3) {
            this.props.fetchOrderData();
        } else {
            this.setState({
                isLoadEnd: true
            });
        }
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