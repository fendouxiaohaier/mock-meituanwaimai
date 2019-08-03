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

export const getFetchContetListAction = () => (dispatch) => {
    axios({
        url: "/json/contentList.json",
        method: "GET",
    }).then((res) => {

        dispatch({
            type: constants.FETCH_CONTENT_LIST,
            payload: res.data.data.poilist
        });

    }).catch((error) =>{
        throw error;
    })
}