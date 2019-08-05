import * as constants from "../../../store/constants";

import axios from "axios";

export const getFetchOrderAction = () => (dispatch) => {
    axios({
        url: "/json/order.json",
        mathod: "GET"
    }).then((res) => {

        dispatch({
            type: constants.FETCH_ORDER_DATA,
            payload: res.data.data
        });

    }).catch((error) =>{
        throw error;
    })
};