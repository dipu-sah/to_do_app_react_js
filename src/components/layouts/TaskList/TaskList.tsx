import { Task } from "../../../@types/DTO/requests/Tasks";
import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";

export function TaskList({ allTasks = [] }: { allTasks: Task[] }): JSX.Element {
  return (
    <div className={"w-full flex-col flex gap-2"}>
      {allTasks.map((el, key) => (
        <TaskPreviewCard
          {...el}
          assignedUsers={[]}
          key={key}
          parentClass={"bg-teal-500"}
        />
      ))}
    </div>
  );
}
