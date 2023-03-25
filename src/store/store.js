import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'counter',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer:persistedReducer,
    middleware:((getDefaultMiddleware) => getDefaultMiddleware({  serializableCheck: false}))
})
export default store