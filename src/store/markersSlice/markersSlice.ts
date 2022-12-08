import db from "@/database/db.json";
import { createSlice } from "@reduxjs/toolkit";
import { IDataMarkers } from "@types";

const initialState: IDataMarkers[] = db;

export const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      state.filter((state) => {
        if (state.id !== payload) {
          return;
        }

        state.status === true ? (state.status = false) : (state.status = true);
      });
    }
  }
});
