import * as constants from "../../../store/constants";

import axios from "axios";

export const getchangeTabAction = (activeKey, showHeaderPanel) => ({
    type: constants.CHANGE_ACTIVE_KEY,
    payload: {
        activeKey,
        showHeaderPanel
    }
});

export const getFetchFilterDataAction = () => (dispatch) =>  {

    axios({
        url: "/json/filter.json",
        methods: "GET",
    }).then((res) => {
        let result = res.data;
        
        if("成功" === result.msg) {
            let filterData = result.data;

            dispatch({
                type: constants.FETCH_FILTER_DATA,
                payload: filterData
            });
        }


    }).catch((error) => {
        throw error;
    });


}

export const getDoFilterAction = (filterID, type) => ({
    type: constants.HANDLE_DO_FILITE,
    payload: {
        filterID,
        type
    }
});