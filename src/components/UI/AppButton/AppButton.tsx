import { AppButtonProps } from "./AppButton.props";
import { Button, IconButton, IconButtonProps } from "@mui/material";
import React, { ForwardedRef } from "react";
import { AppTooltip } from "../Tooltip/AppTooltip";

export const AppButton = React.forwardRef(AppButtonComponent);

function AppButtonComponent(
  {
    children,
    variant = "contained",
    className = "",
    iconOnly = false,
    title = "",
    ...props
  }: AppButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <div className={className}>
      <AppTooltip title={title}>
        {iconOnly ? (
          <IconButton {...(props as IconButtonProps)}>{children}</IconButton>
        ) : (
          <Button variant={variant} fullWidth={true} ref={ref} {...props}>
            {children}
          </Button>
        )}
      </AppTooltip>
    </div>
  );
}
