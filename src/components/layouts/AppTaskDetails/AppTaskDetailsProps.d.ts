import { Task } from "../../../@types/DTO/requests/Tasks";

export interface AppTaskDetailsProps {
  taskDetails: Task;
  onChange?: (newTaskDetails: Task) => void;
}
