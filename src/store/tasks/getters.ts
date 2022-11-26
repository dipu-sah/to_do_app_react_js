import { TaskStates } from "../../@types/redux/states";
import { useSelector } from "react-redux";
import { Task } from "../../@types/DTO/requests/Tasks";

function getSpecificKeyFromTaskState<T>(
  key: string,
  currentState: TaskStates,
  defaultValue: T
): T {
  const temp: Record<string, any> = currentState;
  return temp[key] || defaultValue;
}

export const TaskGetters = {
  getAllTasks(): TaskStates["allTasks"] {
    return useSelector<TaskStates, TaskStates["allTasks"]>((currentState) =>
      getSpecificKeyFromTaskState<Task[]>("allTasks", currentState, [])
    );
  },
  getTaskById(id: number): Task | undefined {
    return useSelector<TaskStates, Task | undefined>((currentState) =>
      getSpecificKeyFromTaskState<Task[]>("allTasks", currentState, []).find(
        (e) => e.id == id
      )
    );
  },
};
