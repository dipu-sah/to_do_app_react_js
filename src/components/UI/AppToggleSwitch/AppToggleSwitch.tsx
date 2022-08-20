import { Switch, SwitchProps } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export function AppToggleSwitch({ id, type, ...props }: SwitchProps) {
  const { control } = useForm();
  console.log(id, props);
  return (
    <Controller
      name={props.name || ""}
      control={control}
      render={() => <Switch {...props} />}
    />
  );
}
