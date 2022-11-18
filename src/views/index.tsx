import React, { useEffect, useState } from "react";
import { Task } from "../@types/DTO/requests/Tasks";
import { TaskList } from "../components/layouts/TaskList/TaskList";

function HomePageComponent() {
  const [allTasks, setAllTasks] = useState<Task[]>([
    {
      id: Date.now(),

      title: "TEST-1",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
    },
    {
      id: Date.now(),

      title: "TEST-2",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
    },
    {
      id: Date.now(),
      title: "TEST-3",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
    },
  ]);
  const [restForm, setResetForm] = useState<boolean>(false);
  const [completedOnly, setCompletedOnly] = React.useState(false);
  const [tasksToShow, setTasksToShow] = useState<Task[]>([]);
  const [notCompletedOnly, setNotCompletedOnly] = useState<boolean>(true);
  const [showTaskOfTitle, setShowTaskOfTitle] = useState<string>("");
  useEffect(() => {
    // 2 variables 4 condition TT,TF,FT and FF
    if (notCompletedOnly && completedOnly) {
      //TT
      setTasksToShow(allTasks.filter((el) => true));
    } else if (completedOnly && !notCompletedOnly) {
      //TF
      setTasksToShow(allTasks.filter((el) => !!el.isCompleted));
    } else if (notCompletedOnly && !completedOnly) {
      //FT
      setTasksToShow(allTasks.filter((el) => !el.isCompleted));
    } else {
      //FF
      setTasksToShow(allTasks.filter((el) => true));
    }
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [completedOnly, allTasks, notCompletedOnly]);
  useEffect(() => {
    const allTasksListLocalStorage: Task[] =
      JSON.parse(localStorage.getItem("allTasks") || "[]") || [];
    if (Array.isArray(allTasksListLocalStorage)) {
      setAllTasks(
        allTasksListLocalStorage.reduce((prev: Task[], current: Task) => {
          return [...prev, { ...current } as Task];
        }, [])
      );
    }
  }, []);

  function toggleCompletedStatus(id: number) {
    const tempAllTasks: Task[] = JSON.parse(JSON.stringify(allTasks));
    const taskIndex: number = getIndexById(id);
    if (taskIndex > -1 && taskIndex < tempAllTasks.length) {
      tempAllTasks[taskIndex].isCompleted =
        !tempAllTasks[taskIndex].isCompleted;
      setAllTasks([...tempAllTasks]);
    }
  }

  function getIndexById(id: number, tempAllTasks: Task[] = allTasks): number {
    return tempAllTasks.findIndex((e: Task) => {
      return e.id === id;
    });
  }

  function deleteTask(id: number) {
    const tempAllTasks: Task[] = JSON.parse(JSON.stringify(allTasks));
    const taskIndex: number = getIndexById(id);
    if (taskIndex > -1 && taskIndex < tempAllTasks.length) {
      tempAllTasks.splice(taskIndex, 1);
      setAllTasks(tempAllTasks);
    }
  }

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
