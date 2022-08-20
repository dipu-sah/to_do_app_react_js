import { HTMLInputTypeAttribute } from "react";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {AppSelectFieldProps} from "../AppSelectFields/AppSelectFieldProps";

export type OMIT_KEYS= "ref"|"required"| "minLength"|"helperText"|"maxLength"|"pattern";
export  interface AppInputSwitcherProps
  extends Omit<AppTextInputFieldProps & AppSelectFieldProps,OMIT_KEYS>,RegisterOptions {
  type: HTMLInputTypeAttribute;
  variant: "standard" | "material";
  className?: string;
  name: string;
}