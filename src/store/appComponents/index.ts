import { createSlice } from "@reduxjs/toolkit";
import { states } from "./states";
import { AllComponentStates } from "../../@types/redux/states";
import { taskReducers } from "./reducers";

export const allComponentSlicer = createSlice<
  AllComponentStates,
  typeof taskReducers,
  "allComponents"
>({
  extraReducers: undefined,
  name: "allComponents",
  reducers: taskReducers,
  initialState: states,
});
export const All_COMPONENT_ACTIONS = allComponentSlicer.actions;
