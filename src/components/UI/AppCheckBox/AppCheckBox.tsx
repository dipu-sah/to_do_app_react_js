import { Checkbox, CheckboxProps } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export function AppCheckBox(props: CheckboxProps) {
  const { control } = useForm();
  return (
    <Controller
      name={props.name || ""}
      control={control}
      render={() => <Checkbox {...props} />}
    />
  );
}
