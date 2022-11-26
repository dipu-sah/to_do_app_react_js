import { Task } from "../../../@types/DTO/requests/Tasks";

export interface TaskPreviewCardProps extends Task {
  parentClass?: string;
  descriptionClass?: string;
  onTaskUpdate?: (updatedTask: Task) => void;
  onTaskDelete?: (taskId: Task["id"]) => void;
}
