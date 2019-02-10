export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
import { combineReducers } from "redux";

export function openDrawer() {
    return {
        type: OPEN_DRAWER
    };
}

export function closeDrawer() {
    return {
        type: CLOSE_DRAWER
    };
}

function drawer(state = { isOpen: false }, action) {
    switch (action.type) {
        case OPEN_DRAWER:
            return { isOpen: true };
        case CLOSE_DRAWER:
            return { isOpen: false };
        default:
            return state;
    }
}

const appReducer = combineReducers({ drawer });

export default appReducer;

export const selectDrawerState = (state) => {
    return state.drawer.isOpen;
};
