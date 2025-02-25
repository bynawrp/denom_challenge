import { legacy_createStore as createStore, combineReducers } from "redux"
import denomReducer from "./reducer/denomReducer.js";

const store = createStore(
    combineReducers({
        denomination: denomReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store