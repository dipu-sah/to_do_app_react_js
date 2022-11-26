import { TaskAddFromProps } from "./TaskAddFrom.props";
import React, { ForwardedRef, useEffect, useState } from "react";
import { AppForm } from "../../UI/AppForms/AppForm";
import { AppInputSwitcherProps } from "../../UI/AppInputSwitcher/AppInputSwitcher.props";
import { AppButton } from "../../UI/AppButton/AppButton";
import { Task } from "../../../@types/DTO/requests/Tasks";

export const TaskAddForm = React.forwardRef<HTMLFormElement, TaskAddFromProps>(
  TaskAddFormComponent
);

function TaskAddFormComponent(
  {
    className = "",
    onChange = () => {},
    onSubmit = () => {},
    resetForm = false,
    value = {},
  }: TaskAddFromProps,
  ref: ForwardedRef<HTMLFormElement>
) {
  const [TaskDetails, setTaskDetails] = useState<Task>({
    description: "",
    title: "",
    id: -1,
    assignedUsers: [],
    isCompleted: false,
    dueDate: new Date(),
    ...value,
  });

  const taskFormFields: AppInputSwitcherProps[] = [
    {
      type: "text",
      variant: "standard",
      name: "title",
      required: {
        value: true,
        message: "Please provide a task title",
      },
      label: "Task Title",
      placeholder: "Task Title",
      className: "h-[4.5rem]",
    },
    {
      type: "text",
      variant: "standard",
      name: "description",
      label: "Description",
      placeholder: "Description",
      className: "h-[4.5rem]",
    },
    {
      type: "date",
      variant: "standard",
      name: "dueDate",
      label: "Due Date",
      placeholder: "Description",
      className: "h-[4.5rem]",
      required: {
        value: true,
        message: "Please provide a valid Date",
      },
      disablePast: true,
    },
  ];

  useEffect(() => {
    const deBounce = setTimeout(() => {
      onChange(TaskDetails as Task);
    }, 800);
    return () => {
      clearTimeout(deBounce);
    };
  }, [TaskDetails]);

  return (
    <AppForm
      ref={ref}
      className={className}
      onSubmit={(e) => {
        onSubmit(e as Task);
      }}
      shouldReset={resetForm}
      onChange={(e) => {
        setTaskDetails({ ...TaskDetails, ...e });
      }}
      formFields={taskFormFields}
      values={TaskDetails}
      cardProps={{ raised: false, variant: "outlined", sx: { border: 0 } }}
    >
      <div className={"flex flex-row gap-2 items-center"}>
        <div className={"flex w-1/2 gap-8"}>
          <AppButton color={"success"} type={"submit"}>
            Create
          </AppButton>
          <AppButton color={"error"} type={"reset"}>
            Reset
          </AppButton>
        </div>
      </div>
    </AppForm>
  );
}
