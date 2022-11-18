import { TaskPreviewCard } from "../TaskPreviewCard/TaskPreviewCard";
import React from "react";
import { TaskPreviewCardProps } from "../TaskPreviewCard/TaskPreviewCardProps";
import { Draggable } from "../../UI/Draggable/Draggable";

export function DraggableTaskList() {
  const colorClasses: string[] = [
    "bg-orange-300",
    "bg-red-300",
    "bg-pink-300",
    "bg-green-300",
    "bg-violet-300",
    "bg-teal-300",
    "bg-pink-300",
  ];
  const allTasks: TaskPreviewCardProps[] = [
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
    {
      isCompleted: false,
      title: "TITLE",
      id: 0,
      assignedUsers: [],
      description: "HELLLLLLLO",
    },
  ];
  return (
    <div
      className={
        "flex flex-col gap-2 w-full border-2 border-solid border-red-800"
      }
      onDragOver={(e) => {
        e.preventDefault();
        console.log(e);
      }}
      onDrop={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      {allTasks.map((e, index) => {
        return (
          <Draggable key={index}>
            <TaskPreviewCard
              {...e}
              parentClass={colorClasses[index % colorClasses.length]}
            />
          </Draggable>
        );
      })}
    </div>
  );
}
