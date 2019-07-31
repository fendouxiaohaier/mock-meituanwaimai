import { combineReducers } from "redux-immutable";

import buttonBarReducer from "../components/ButtonBar/store/reducer";

const reducer = combineReducers({
    buttonBar: buttonBarReducer
});

export default reducer;