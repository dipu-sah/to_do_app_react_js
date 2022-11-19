import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";
import { TaskListProps } from "./TaskListProps";

export function TaskList({
  allTasks = [],
  onTaskUpdate,
  onTaskDelete,
}: TaskListProps): JSX.Element {
  return (
    <div className={"w-full flex-col flex gap-2"}>
      {allTasks.map((el, key) => (
        <TaskPreviewCard
          {...el}
          assignedUsers={[]}
          key={key}
          parentClass={"bg-teal-500"}
          onTaskUpdate={(e) => {
            onTaskUpdate(e, key);
          }}
          onTaskDelete={(e) => {
            onTaskDelete(key, e);
          }}
        />
      ))}
    </div>
  );
}
