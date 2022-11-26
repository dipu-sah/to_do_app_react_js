import { createSlice } from "@reduxjs/toolkit";
import { states } from "./states";
import { TaskStates } from "../../@types/redux/states";
import { taskReducers } from "./reducers";

export const taskSlicer = createSlice<TaskStates, typeof taskReducers, "tasks">(
  {
    extraReducers: undefined,
    name: "tasks",
    reducers: taskReducers,
    initialState: states,
  }
);
export const TASK_ACTIONS = taskSlicer.actions;
