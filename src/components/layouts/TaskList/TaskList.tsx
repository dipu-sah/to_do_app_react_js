import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";
import { TaskListProps } from "./TaskListProps";

export function TaskList({
  allTasks = [],
  onTaskUpdate,
  onTaskDelete,
}: TaskListProps): JSX.Element {
  const bgColorClasses = ["bg-teal-500", "bg-red-400", "bg-green-400"];
  return (
    <div className={"w-full flex-col flex gap-2"}>
      {allTasks.map((el, key) => (
        <TaskPreviewCard
          {...el}
          assignedUsers={[]}
          key={key}
          parentClass={bgColorClasses[key % bgColorClasses.length]}
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
