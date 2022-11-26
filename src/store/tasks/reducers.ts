import { TaskStates } from "../../@types/redux/states";
import { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../@types/DTO/requests/Tasks";

export const taskReducers = {
  initialiseAllTasks(
    currentState: TaskStates,
    actionData: PayloadAction<Task[]>
  ) {
    currentState.allTasks = actionData.payload;
  },
  addNewTask(currentState: TaskStates, payload: PayloadAction<Task>) {
    currentState.allTasks.push(payload.payload);
  },
  deleteTaskByIndex(
    currentState: TaskStates,
    actionData: PayloadAction<number>
  ) {
    currentState.allTasks.splice(actionData.payload, 1);
  },
  deleteTaskById(currentState: TaskStates, actionData: PayloadAction<number>) {
    const index = currentState.allTasks.findIndex(
      (e) => e.id == actionData.payload
    );
    if (index >= 0) {
      currentState.allTasks.splice(index, 1);
    }
  },
  updateTaskById(
    currentState: TaskStates,
    actionData: PayloadAction<{
      id: number;
      newTaskDetails: Task;
    }>
  ) {
    const index = currentState.allTasks.findIndex(
      (e) => e.id == actionData.payload.id
    );
    if (index >= 0) {
      currentState.allTasks.splice(index, 1, actionData.payload.newTaskDetails);
    }
  },
  updateTaskByIndex(
    currentState: TaskStates,
    actionData: PayloadAction<{
      index: number;
      newTaskDetails: Task;
    }>
  ) {
    currentState.allTasks.splice(
      actionData.payload.index,
      1,
      actionData.payload.newTaskDetails
    );
  },
};
