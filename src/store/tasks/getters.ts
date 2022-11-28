import { useSelector } from "react-redux";
import { Task } from "../../@types/DTO/requests/Tasks";
import { storeStateType } from "../index";
import { taskSlicer } from "./index";

function getSpecificKeyFromTaskState<T>(
  key: string,
  currentState: storeStateType,
  defaultValue: T
): T {
  const temp: any = currentState[taskSlicer.name];
  return temp[key] || defaultValue;
}

export const TaskGetters = {
  getAllTasks(): Task[] {
    return useSelector<storeStateType, Task[]>((currentState) =>
      getSpecificKeyFromTaskState<Task[]>("allTasks", currentState, []).map(
        (el) => ({
          ...el,
          dueDate: new Date(el.dueDate),
        })
      )
    );
  },
  getTaskById(id: number): Task | undefined {
    return useSelector<storeStateType, Task | undefined>((currentState) =>
      getSpecificKeyFromTaskState<Task[]>("allTasks", currentState, []).find(
        (e) => e.id == id
      )
    );
  },
};
