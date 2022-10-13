import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {itemsReducer, itemReducer, toolsReducer} from "./slices";


const rootReducer = combineReducers({
    itemsReducer, itemReducer, toolsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}