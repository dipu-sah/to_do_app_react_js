import { Task } from "../../../@types/DTO/requests/Tasks";

export interface TaskListProps {
  allTasks: Task[];
  onTaskUpdate: (updatedTaskDetails: Task, taskIndex: number) => void;
  onTaskDelete: (index: number, taskId: number) => void;
}
