import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { markersSlice } from "./markersSlice";

const rootReducer = combineReducers({
  markers: markersSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type TypeRootState = ReturnType<typeof rootReducer>;
