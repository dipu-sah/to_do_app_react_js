import { TaskAddFromProps } from "./TaskAddFrom.props";
import React, { ForwardedRef, useState } from "react";
import { AppForm } from "../../UI/AppForms/AppForm";
import { AppInputSwitcherProps } from "../../UI/AppInputSwitcher/AppInputSwitcher.props";
import { AppButton } from "../../UI/AppButton/AppButton";

export const TaskAddForm = React.forwardRef<HTMLFormElement, TaskAddFromProps>(
  TaskAddFormComponent
);

function TaskAddFormComponent(
  { className = "", onSubmit = () => {}, resetForm = false }: TaskAddFromProps,
  ref: ForwardedRef<HTMLFormElement>
) {
  const [TaskDetails, setTaskDetails] = useState<Record<string, string>>({
    description: "",
    title: "",
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

  return (
    <AppForm
      ref={ref}
      className={"w-11/12 box-border py-8 " + className}
      onSubmit={(e) => {
        onSubmit(e);
      }}
      shouldReset={resetForm}
      onChange={(e) => {
        setTaskDetails({ ...TaskDetails, ...e });
      }}
      formFields={taskFormFields}
      values={TaskDetails}
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
