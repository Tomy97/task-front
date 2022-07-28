import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/RootReducer";

export const store = configureStore({
    reducer: rootReducers,
});
