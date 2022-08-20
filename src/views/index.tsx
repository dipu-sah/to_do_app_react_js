import React, {useState} from "react";
import { TaskAddForm } from "../components/layouts/TaskAddForm/TaskAddFrom";
import {NewTasks} from "../@types/DTO/requests/Tasks";

function HomePageComponent() {
    const [allTasks,setAllTasks]=useState<NewTasks[]>([]);
    const [restForm,setResetForm]=useState<boolean>(false);
  return (
      <div
          className={
            "h-full w-full flex flex-col justify-center items-center h-full"
          }
      >
        <TaskAddForm
            className={"w-1/2 flex flex-col gap-4 box-border py-2"}
            resetForm={restForm}
            onSubmit={async (e)=>{
            console.log(e)
            await setAllTasks([...allTasks,{title:"",...e} as NewTasks])
                await setResetForm(true);
                setResetForm(false)

            }}/>
      </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
