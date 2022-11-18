import { Task } from "../../../@types/DTO/requests/Tasks";

export interface TaskPreviewCardProps extends Task {
  assignedUsers: string[];
  parentClass?: string;
  descriptionClass?: string;
}
