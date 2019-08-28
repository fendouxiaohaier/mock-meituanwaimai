import { combineReducers } from "redux-immutable";

import headerReducer from "../components/Header/store/reducer";
import contentReucer from "../components/Content/store/reducer";

const reducer = combineReducers({
    header: headerReducer,
    content: contentReucer
});

export default reducer;