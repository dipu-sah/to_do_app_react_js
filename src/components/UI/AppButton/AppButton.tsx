import { AppButtonProps } from "./AppButton.props";
import { Button } from "@mui/material";
import React, { ForwardedRef } from "react";

export const AppButton = React.forwardRef(AppButtonComponent);

function AppButtonComponent(
  { children, variant = "contained", ...props }: AppButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button variant={variant} fullWidth={true} ref={ref} {...props}>
      {children}
    </Button>
  );
}
