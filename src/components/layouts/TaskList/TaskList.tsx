import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";
import { TaskListProps } from "./TaskListProps";
import { useAppDispatch } from "../../../store";
import { TASK_ACTIONS } from "../../../store/tasks";

export function TaskList({ allTasks = [] }: TaskListProps): JSX.Element {
  const bgColorClasses = [
    "bg-violet-400",
    "bg-[#8AAAE5]", // skyblue
    // "bg-[#EA738DFF]", //red
    "bg-[#317773]", // olive
    "bg-[#A7BEAE]", // light-olive
  ];
  const dispatch = useAppDispatch();
  return (
    <div className={"w-full flex-col flex gap-2 text-white"}>
      {allTasks.map((el, key) => (
        <TaskPreviewCard
          {...el}
          assignedUsers={[]}
          key={el.id}
          parentClass={
            bgColorClasses[key % bgColorClasses.length] +
            " hover:scale-[1.01] cursor-pointer"
          }
          onTaskUpdate={(e) => {
            dispatch(
              TASK_ACTIONS.updateTaskById({
                id: el.id,
                newTaskDetails: e,
              })
            );
          }}
          onTaskDelete={(e) => {
            dispatch(TASK_ACTIONS.deleteTaskById(e));
          }}
        />
      ))}
    </div>
  );
}
