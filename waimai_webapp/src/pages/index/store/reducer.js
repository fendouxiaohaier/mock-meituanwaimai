import { combineReducers } from "redux-immutable";

import buttonBarReducer from "../components/ButtonBar/store/reducer";
import homeReducer from "../components/Home/store/reducer";

const reducer = combineReducers({
    buttonBar: buttonBarReducer,
    home: homeReducer
});

export default reducer;