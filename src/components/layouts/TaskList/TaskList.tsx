import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";
import { TaskListProps } from "./TaskListProps";

export function TaskList({
  allTasks = [],
  onTaskUpdate,
  onTaskDelete,
}: TaskListProps): JSX.Element {
  const bgColorClasses = [
    "bg-violet-400",
    "bg-[#8AAAE5]", // skyblue
    // "bg-[#EA738DFF]", //red
    "bg-[#317773]", // olive
    "bg-[#A7BEAE]", // light-olive
  ];
  return (
    <div className={"w-full flex-col flex gap-2 text-white"}>
      {allTasks.map((el, key) => (
        <TaskPreviewCard
          {...el}
          assignedUsers={[]}
          key={key}
          parentClass={
            bgColorClasses[key % bgColorClasses.length] +
            " hover:scale-[1.01] cursor-pointer"
          }
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
