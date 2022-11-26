import { Task } from "../DTO/requests/Tasks";

export type StateSingleTaskType = Omit<Task, "dueDate"> & { dueDate: string };

export interface TaskStates {
  allTasks: StateSingleTaskType[];
}
