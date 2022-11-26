import { Task } from "../../../@types/DTO/requests/Tasks";

export interface TaskAddFromProps {
  className?: string;
  onSubmit?: (e: Task) => void;
  resetForm?: boolean;
  onChange?: (taskDetails: Task) => void;
  value?: Record<string, any>;
}
