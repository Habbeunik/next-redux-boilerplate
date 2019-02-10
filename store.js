import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export function initializeStore(initialState) {
    return createStore(reducer, initialState, composeWithDevTools());
}