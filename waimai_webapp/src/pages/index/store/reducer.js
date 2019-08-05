import { combineReducers } from "redux-immutable";

import buttonBarReducer from "../components/ButtonBar/store/reducer";
import homeReducer from "../components/Home/store/reducer";
import orderReducer from "../components/Order/store/reducer";

const reducer = combineReducers({
    buttonBar: buttonBarReducer,
    home: homeReducer,
    order: orderReducer
});

export default reducer;