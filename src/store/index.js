import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  ui: uiSlice.reducer,
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
});
const persistConfig = {
  key: "root",
  whitelist: ['auth'],
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer:  persistedReducer,
  
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
