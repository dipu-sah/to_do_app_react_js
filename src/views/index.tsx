import React, { useEffect, useState } from "react";
import { Task } from "../@types/DTO/requests/Tasks";
import { TaskList } from "../components/layouts/TaskList/TaskList";

function HomePageComponent() {
  function getRandomId() {
    return Date.now() + Math.ceil(Math.random() * 10000);
  }

  const [allTasks, setAllTasks] = useState<Task[]>([
    {
      id: getRandomId(),
      title: "TEST-1",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
    },
    {
      id: getRandomId(),
      title: "TEST-2",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
    },
    {
      id: getRandomId(),
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

  function updateTaskUpIndex(updateDetails: Task, taskIndex: number) {
    const tempAllTasks: Task[] = JSON.parse(JSON.stringify(allTasks));
    if (taskIndex > -1 && taskIndex < tempAllTasks.length) {
      tempAllTasks[taskIndex] = updateDetails;
      setAllTasks([...tempAllTasks]);
    }
  }

  function getIndexById(id: number, tempAllTasks: Task[] = allTasks): number {
    return tempAllTasks.findIndex((e: Task) => {
      return e.id === id;
    });
  }

  function deleteTaskById(id: number) {
    const tempAllTasks: Task[] = JSON.parse(JSON.stringify(allTasks));
    const taskIndex: number = getIndexById(id);
    if (taskIndex > -1 && taskIndex < tempAllTasks.length) {
      tempAllTasks.splice(taskIndex, 1);
      setAllTasks(tempAllTasks);
    }
  }

  function deleteTaskByIndex(taskIndex: number) {
    const tempAllTasks: Task[] = JSON.parse(JSON.stringify(allTasks));
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
      <TaskList
        allTasks={allTasks}
        onTaskUpdate={(updatedTaskDetails, index) => {
          updateTaskUpIndex(updatedTaskDetails, index);
        }}
        onTaskDelete={(index) => {
          deleteTaskByIndex(index);
        }}
      />
    </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
