import { configureStore } from "@reduxjs/toolkit";
import { taskSlicer } from "./tasks";
import { useDispatch } from "react-redux";
import { allComponentSlicer } from "./appComponents";

const reducer = {
  [taskSlicer.name]: taskSlicer.reducer,
  [allComponentSlicer.name]: allComponentSlicer.reducer,
};
export const store = configureStore({
  reducer: {
    [taskSlicer.name]: taskSlicer.reducer,
    [allComponentSlicer.name]: allComponentSlicer.reducer,
  },
});
export type storeStateType = typeof reducer;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
