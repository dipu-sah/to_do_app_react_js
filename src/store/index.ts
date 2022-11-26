import { configureStore } from "@reduxjs/toolkit";
import { taskSlicer } from "./tasks";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: taskSlicer.reducer,
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
