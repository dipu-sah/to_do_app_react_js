import { TaskAddFromProps } from "./TaskAddFrom.props";
import React, { ForwardedRef, useState } from "react";
import { AppForm } from "../../UI/AppForms/AppForm";
import { AppInputSwitcherProps } from "../../UI/AppInputSwitcher/AppInputSwitcher.props";
import { AppButton } from "../../UI/AppButton/AppButton";

export const TaskAddForm = React.forwardRef<HTMLFormElement, TaskAddFromProps>(
  TaskAddFormComponent
);

function TaskAddFormComponent(
  { className = "", onSubmit = () => {} }: TaskAddFromProps,
  ref: ForwardedRef<HTMLFormElement>
) {
  const [TaskDetails, setTaskDetails] = useState<Record<string, string>>({
    description: "",
    title: "",
  });

  const taskFormFields: AppInputSwitcherProps[] = [
    {
      type: "text",
      variant: "material",
      name: "title",
      required: true,
      label: "Task Title",
      placeholder: "Task Title",
    },
    {
      type: "text",
      variant: "material",
      name: "title",
      label: "Description",
      placeholder: "Description",
    },
  ];

  return (
    <AppForm
      className={"w-11/12 box-border py-8"}
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
