import React from "react";
import { TaskAddForm } from "../components/layouts/TaskAddForm/TaskAddFrom";

function HomePageComponent() {


  return (
      <div
          className={
            "h-full w-full flex flex-col justify-center items-center h-full"
          }
      >
        <TaskAddForm className={"w-1/2 flex flex-col gap-4 box-border py-2"} />
      </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
