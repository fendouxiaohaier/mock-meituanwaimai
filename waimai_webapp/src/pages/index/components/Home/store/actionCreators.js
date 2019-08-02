import * as constants from "../../../store/constants";

import axios from "axios";

export const getFetchHeadAction = () => (dispatch) => {
    axios({
        url: "/json/head.json",
        method: "GET",
    }).then((res) => {
        dispatch({
            type: constants.FETCH_HEAD,
            payload: res.data.data
        })
    });
}