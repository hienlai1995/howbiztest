import { legacy_createStore as createStore } from "redux";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhencers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhencers);
export default store;
