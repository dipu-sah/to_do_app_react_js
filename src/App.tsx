import React, { useState } from "react";
import { AllAvailableRouter } from "./router";
import { AppFab } from "./components/UI/AppFab/AppFab";
import { AddOutlined } from "@mui/icons-material";
import { AppModal } from "./components/UI/AppModal/AppModal";
import { TaskAddForm } from "./components/layouts/TaskAddForm/TaskAddFrom";
import { useAppDispatch } from "./store";
import { Task } from "./@types/DTO/requests/Tasks";
import { TASK_ACTIONS } from "./store/tasks";

function App() {
  const dispatch = useAppDispatch();
  const [currentTaskDetails, setCurrentTaskDetails] = useState<Task>({
    description: "",
    title: "",
    id: -1,
    assignedUsers: [],
    isCompleted: false,
    dueDate: new Date(),
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className={"h-full"}>
      <AllAvailableRouter />
      <AppFab
        color={"error"}
        size={"large"}
        title={"create new task"}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <AddOutlined />
      </AppFab>
      <AppModal
        open={openModal}
        children={
          <TaskAddForm
            onSubmit={(e) => {
              dispatch(
                TASK_ACTIONS.addNewTask({
                  ...e,
                })
              );
              setCurrentTaskDetails({
                description: "",
                id: -1,
                assignedUsers: [],
                isCompleted: false,
                title: "",
                dueDate: new Date(),
              });
            }}
            value={currentTaskDetails}
            onChange={(e) => {
              setCurrentTaskDetails({
                id: currentTaskDetails.id,
                title: e.title || currentTaskDetails.title,
                description: e.description || currentTaskDetails.description,
                isCompleted: e.isCompleted || currentTaskDetails.isCompleted,
                dueDate: e.dueDate || currentTaskDetails.dueDate,
                assignedUsers:
                  e.assignedUsers || currentTaskDetails.assignedUsers,
              });
            }}
          />
        }
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}

export default App;
