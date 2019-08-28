import * as constants from "./constants";
import axios from "axios";

/**
 * 
 * @param filterID 点击的过滤条件
 * @param toFirstPage 是否将page还原为第一页
 */
export const getFetchContetListAction = ({filterID,toFirstPage}) => async (dispatch, getState) => {
    
    let url = "/json/contentList.json";

    // 如果当前是处于过滤状态
    if(filterID || getState().getIn(["content", "filterID"])) {
        url = "/json/listparams.json";
    }

    try {
        let response = await axios({
            url,
            method: "GET",
        })
    
        dispatch({
            type: constants.FETCH_CONTENT_LIST,
            filterID, 
            toFirstPage,
            payload: {
                items: response.data.data.poilist,
                filterID,
                toFirstPage
            }
        });
    } catch (error) {
        throw error;
    }

}