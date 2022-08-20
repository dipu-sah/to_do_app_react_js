import React, {useEffect, useState} from "react";
import {TaskAddForm} from "../components/layouts/TaskAddForm/TaskAddFrom";
import {NewTasks} from "../@types/DTO/requests/Tasks";
import {AppCard} from "../components/UI/AppCard/AppCard";
import {CardContent} from "@mui/material";
import {AppInputSwitcher} from "../components/UI/AppInputSwitcher/AppInputSwitcher";
import {AppButton} from "../components/UI/AppButton/AppButton";
import {DeleteTwoTone} from "@mui/icons-material";


function HomePageComponent() {
  const [allTasks, setAllTasks] = useState<NewTasks[]>([]);
  const [restForm, setResetForm] = useState<boolean>(false);
  useEffect(() => {
    const allTasksListLocalStorage: NewTasks[] =
      JSON.parse(localStorage.getItem("allTasks") || "") || [];
    if (Array.isArray(allTasksListLocalStorage)) {
      setAllTasks(
        allTasksListLocalStorage.reduce(
          (prev: NewTasks[], current: NewTasks) => {
            return [...prev, { ...current } as NewTasks];
          },
          []
        )
      );
    }
  }, []);
  useEffect(() => {
    if (allTasks.length) {
      localStorage.setItem("allTasks", JSON.stringify(allTasks));
    }
  }, [allTasks]);
  function toggleCompletedStatus(index:number){
      const tempAllTasks: NewTasks[] = JSON.parse(
          JSON.stringify(allTasks)
      );
      tempAllTasks[index].isCompleted = !tempAllTasks[index].isCompleted;
      setAllTasks(tempAllTasks);
  }
  function deleteTask(index:number){
      const tempAllTasks: NewTasks[] = JSON.parse(
          JSON.stringify(allTasks)
      );
      tempAllTasks.splice(index,1);
      setAllTasks(tempAllTasks);
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
          await setAllTasks([...allTasks, { title: "", ...e } as NewTasks]);
          await setResetForm(true);
          setResetForm(false);
        }}
      />
      <AppCard className={"w-full"}>
        <CardContent className={"bg-red-200 flex flex-col gap-4 rounded-lg"}>
          {allTasks.map((el, index) => {
            return (
              <AppCard key={index} className={""} >
                <CardContent
                    className={
                    "flex flex-row justify-center items-center gap-2 bg-green-200 cursor-pointer"
                  }
                >
                  <AppInputSwitcher
                      onClick={()=>toggleCompletedStatus(index)}
                      type={"radio"}
                    title={"is completed"}
                    variant={"material"}
                    options={[{
                        value:true,
                        label:""
                    }]}
                    value={!!el.isCompleted}
                  />
                    <span
                        className={"grow"}
                        onClick={()=>toggleCompletedStatus(index)}

                    >

                    {!el.isCompleted &&<h2 className={"text-xs uppercase grow"}>{el.title}</h2>}
                    {el.isCompleted&&<s className={"text-xs uppercase grow"}>{el.title}</s>}
                    </span>
                    <AppButton className={"w-fit"} color={"error"} variant={"text"} onClick={()=>{
                        deleteTask(index)
                    }}>
                        <DeleteTwoTone/>
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
