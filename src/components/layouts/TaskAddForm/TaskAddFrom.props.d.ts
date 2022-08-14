import { NewTasks } from "../../../@types/DTO/requests/Tasks";

export interface TaskAddFromProps {
  className?: string;
  onSubmit?: (e: NewTasks) => void;
}
