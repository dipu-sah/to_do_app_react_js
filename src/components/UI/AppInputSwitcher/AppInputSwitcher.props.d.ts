import { HTMLInputTypeAttribute } from "react";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";

export interface AppInputSwitcherProps
  extends Omit<AppTextInputFieldProps, "ref"> {
  type: HTMLInputTypeAttribute;
  variant: "standard" | "material";
  className?: string;
  name: string;
}
