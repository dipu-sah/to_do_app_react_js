import { TaskStates } from "../../@types/redux/states";

function getRandomId() {
  return Date.now() + Math.ceil(Math.random() * 10000);
}

export const states: TaskStates = {
  allTasks: [
    {
      id: getRandomId(),
      title: "TEST-1",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
      dueDate: new Date().toLocaleDateString(),
    },
    {
      id: getRandomId(),
      title: "TEST-2",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
      dueDate: new Date().toLocaleDateString(),
    },
    {
      id: getRandomId(),
      title: "TEST-3",
      isCompleted: false,
      description: "THIS IS THE DESCRIPTION",
      dueDate: new Date().toLocaleDateString(),
    },
  ],
};
