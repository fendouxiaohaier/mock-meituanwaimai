import { fromJS } from "immutable";

import * as constants from "../../../store/constants";

const defaultState = fromJS({
    items: {
        category: {
            key: "category",
            text: "全部品类",
            filterID: ""
        },
        sort:  {
            key: "sort",
            text: "综合排序",
            filterID: ""
        },
        filter: {
            key: "filter",
            text: "筛选",
            filterID: ""
        }
    },

    activeKey: "",

    showHeaderPanel: false,  // 是否显示header-panel面板

    filterData: {},  // 过滤数据
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_ACTIVE_KEY:
            return state.merge({
                ...action.payload,
            });

        case constants.FETCH_FILTER_DATA:
            return state.set("filterData", fromJS(action.payload));
        
        case constants.HANDLE_DO_FILITE: {
            let _items = state.get("items").toJS();
            _items[action.payload.type].filterID = action.payload.filterID;

            return state.set("items", fromJS(_items));
        }

        default:
            return state;
    }
}