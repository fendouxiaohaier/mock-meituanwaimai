import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer.js";

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

/**
 * redux 热更新步骤
 */
if(module.hot) {
    module.hot.accept("./reducer", () => {
        const nextReducer = require("./reducer.js").default;
        store = store.replaceReducer(nextReducer);
    })
}

export default store;