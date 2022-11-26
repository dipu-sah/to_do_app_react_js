import React from "react";
import { TaskList } from "../components/layouts/TaskList/TaskList";
import { TaskGetters } from "../store/tasks/getters";

function HomePageComponent() {
  const allTasks = TaskGetters.getAllTasks();

  return (
    <div
      className={
        "h-full w-full justify-center items-center h-full box-border p-2 gap-4 flex flex-row"
      }
    >
      <TaskList allTasks={allTasks} />
    </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
