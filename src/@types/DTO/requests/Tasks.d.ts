export interface Task {
  id: number;
  title: string;
  description?: string;
  isCompleted?: boolean;
  assignedUsers?: string[];
  dueDate: Date;
}
