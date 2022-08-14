import { AppTextInputFieldProps } from "./AppTextInputField.props";
import { TextField } from "@mui/material";
import React, { ForwardedRef } from "react";

export const AppTextInputField = React.forwardRef(AppTextInputFieldComponent);

export function AppTextInputFieldComponent(
  { variant = "material", ...props }: AppTextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  if (variant === "material") {
    return (
      <TextField
        fullWidth={true}
        variant={"outlined"}
        inputRef={ref}
        {...props}
      />
    );
  }
  return (
    <TextField
      fullWidth={true}
      variant={"standard"}
      inputRef={ref}
      {...props}
    />
  );
}
