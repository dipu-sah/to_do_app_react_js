import { AppTextInputFieldProps } from "./AppTextInputField.props";
import { TextField } from "@mui/material";
import React, { ForwardedRef } from "react";
import { Controller, useForm } from "react-hook-form";

export const AppTextInputField = React.forwardRef(AppTextInputFieldComponent);

export function AppTextInputFieldComponent(
  { variant = "material", ...props }: AppTextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { control } = useForm();
  if (variant === "material") {
    return (
      <Controller
        control={control}
        name={props.name}
        render={() => (
          <TextField
            fullWidth={true}
            variant={"outlined"}
            inputRef={ref}
            {...props}
          />
        )}
      />
    );
  }
  return (
    <Controller
      control={control}
      name={props.name}
      render={() => (
        <TextField
          fullWidth={true}
          variant={"standard"}
          inputRef={ref}
          {...props}
        />
      )}
    />
  );
}
