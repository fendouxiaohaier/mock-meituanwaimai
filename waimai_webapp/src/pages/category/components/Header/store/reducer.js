import { fromJS } from "immutable";

import * as constants from "../../../store/constants";

const defaultState = fromJS({
    items: [
        {
            key: "category",
            text: "全部品类",
            obj: {}
        },
        {
            key: "sort",
            text: "综合排序",
            obj: {}
        },
        {
            key: "filter",
            text: "筛选",
            obj: {}
        }
    ],

    activeKey: "category",

    filterData: {},  // 过滤数据
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_ACTIVE_KEY:
            return state.set("activeKey", action.payload);

        case constants.FETCH_FILTER_DATA:
            return state.set("filterData", fromJS(action.payload));

        default:
            return state;
    }
}