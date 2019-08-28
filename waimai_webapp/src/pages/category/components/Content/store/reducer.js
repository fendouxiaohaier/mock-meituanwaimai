import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    contentList: [],
    curPage: 0,
    filterID: "",
    isLoadEnd: false
});

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.FETCH_CONTENT_LIST:

            let contentList;

            if(action.payload.toFirstPage) {
                contentList = [];
            } else {
                contentList = state.get("contentList").toJS();
            }

            Array.prototype.push.apply(contentList, action.payload.items);

            let curPage = action.payload.toFirstPage ? 1 : state.get("curPage")+1; 

            let isLoadEnd = false;
            if(curPage >= 3) {
                isLoadEnd = true;
            }
                
            return state.merge({
                contentList: fromJS(contentList),
                curPage,
                filterID: action.payload.filterID || state.get("filterID"),
                isLoadEnd
            });
    
        default:
            return state;
    }
}

export default reducer;