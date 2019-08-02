import { fromJS } from "immutable";

import * as constants from "../../../store/constants";

const defaultState = fromJS({
    categorys: []
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.FETCH_HEAD:
            return state.set("categorys", fromJS(action.payload.primary_filter));
    
        default:
            return state
    }
}

export default reducer;