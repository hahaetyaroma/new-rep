import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { markersSlice } from "store/markersSlice";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(markersSlice.actions, dispatch);
};
