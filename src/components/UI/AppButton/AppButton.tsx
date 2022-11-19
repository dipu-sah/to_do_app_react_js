import { AppButtonProps } from "./AppButton.props";
import { Button, IconButton, IconButtonProps } from "@mui/material";
import React, { ForwardedRef } from "react";

export const AppButton = React.forwardRef(AppButtonComponent);

function AppButtonComponent(
  {
    children,
    variant = "contained",
    className = "",
    iconOnly = false,
    ...props
  }: AppButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <div className={className}>
      {iconOnly ? (
        <IconButton {...(props as IconButtonProps)}>{children}</IconButton>
      ) : (
        <Button variant={variant} fullWidth={true} ref={ref} {...props}>
          {children}
        </Button>
      )}
    </div>
  );
}
