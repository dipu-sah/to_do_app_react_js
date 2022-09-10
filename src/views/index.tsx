import React, { useEffect, useState } from "react";
import { TaskAddForm } from "../components/layouts/TaskAddForm/TaskAddFrom";
import { Task } from "../@types/DTO/requests/Tasks";
import { AppCard } from "../components/UI/AppCard/AppCard";
import { CardContent, ToggleButton } from "@mui/material";
import { AppInputSwitcher } from "../components/UI/AppInputSwitcher/AppInputSwitcher";
import { AppButton } from "../components/UI/AppButton/AppButton";
import { DeleteTwoTone } from "@mui/icons-material";

function HomePageComponent() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [restForm, setResetForm] = useState<boolean>(false);
  const [completedOnly, setCompletedOnly] = React.useState(false);
  const [tasksToShow, setTasksToShow] = useState<Task[]>([]);
  const [notCompletedOnly, setNotCompletedOnly] = useState<boolean>(true);
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
        "h-full w-full flex flex-col justify-center items-center h-full"
      }
    >
      <TaskAddForm
        className={"w-1/2 flex flex-col gap-4 box-border py-2"}
        resetForm={restForm}
        onSubmit={async (e) => {
          await setAllTasks([
            ...allTasks,
            { title: "", ...e, id: Date.now() } as Task,
          ]);
          await setResetForm(true);
          setResetForm(false);
        }}
      />
      <AppCard className={"w-full"}>
        <CardContent className={"bg-red-200 flex flex-col gap-4 rounded-lg"}>
          <div className={"flex flex-row flex-wrap gap-2"}>
            <ToggleButton
              className={"w-fit"}
              value={true}
              selected={completedOnly}
              onChange={() => {
                setCompletedOnly(!completedOnly);
              }}
              color={"success"}
            >
              Completed only
            </ToggleButton>

            <ToggleButton
              className={"w-fit"}
              size={"small"}
              value={true}
              selected={notCompletedOnly}
              onChange={() => {
                setNotCompletedOnly(!notCompletedOnly);
              }}
              color={"success"}
            >
              Not Completed Only
            </ToggleButton>
          </div>
          <AppInputSwitcher
            type={"autoComplete"}
            label="Search Task By Title"
            name="ABC"
            options={allTasks.map((e) => {
              return e.title;
            })}
          />
          {tasksToShow.map((el, index) => {
            return (
              <AppCard key={index} className={""}>
                <CardContent
                  className={
                    "flex flex-row justify-center items-center gap-2 bg-green-200 cursor-pointer"
                  }
                >
                  <AppInputSwitcher
                    onClick={() => toggleCompletedStatus(el.id)}
                    type={"radio"}
                    title={"is completed"}
                    variant={"material"}
                    options={[
                      {
                        value: true,
                        label: "",
                      },
                    ]}
                    value={!!el.isCompleted}
                  />
                  <span
                    className={"grow"}
                    onClick={() => toggleCompletedStatus(el.id)}
                  >
                    {!el.isCompleted && (
                      <h2 className={"text-xs uppercase grow"}>{el.title}</h2>
                    )}
                    {el.isCompleted && (
                      <s className={"text-xs uppercase grow"}>{el.title}</s>
                    )}
                    {JSON.stringify(el)}
                  </span>
                  <AppButton
                    className={"w-fit"}
                    color={"error"}
                    variant={"text"}
                    onClick={() => {
                      deleteTask(el.id);
                    }}
                  >
                    <DeleteTwoTone />
                  </AppButton>
                </CardContent>
              </AppCard>
            );
          })}
        </CardContent>
      </AppCard>
    </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
