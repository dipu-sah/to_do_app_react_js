import { AppInputSwitcherProps } from "./AppInputSwitcher.props";
import { AppTextInputField } from "../AppTextInputField/AppTextInputField";
import React, { ForwardedRef } from "react";

export const AppInputSwitcher = React.forwardRef<any, any>(
  AppInputSwitcherComponent
);

function AppInputSwitcherComponent(
  { type, variant, className = "", ...otherProps }: AppInputSwitcherProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={"h-16 " + className}>
      {(() => {
        if (type === "text") {
          if (variant === "standard")
            return (
              <AppTextInputField variant={variant} {...otherProps} ref={ref} />
            );
          return (
            <AppTextInputField variant={"material"} {...otherProps} ref={ref} />
          );
        }
      })()}
    </div>
  );
}
