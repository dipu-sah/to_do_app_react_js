import { AppTextInputFieldProps } from "./AppTextInputField.props";
import { TextField } from "@mui/material";
import React, { ForwardedRef } from "react";

export function AppTextInputFieldComponent(
  props: AppTextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth={true}
      variant={"standard"}
    />
  );
}

// export const AppTextInputField=React.forwardRef(AppTextInputFieldComponent)
