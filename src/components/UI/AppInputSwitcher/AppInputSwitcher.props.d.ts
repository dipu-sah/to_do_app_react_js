import { HTMLInputTypeAttribute } from "react";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import { AppSelectFieldProps } from "../AppSelectFields/AppSelectFieldProps";
import { AppAutoCompleteProps } from "../AppAutoCompete/AutoComplete";

export type AppInputTypes = HTMLInputTypeAttribute | "switch" | "autoComplete";
export type OMIT_KEYS =
  | "ref"
  | "required"
  | "minLength"
  | "helperText"
  | "maxLength"
  | "pattern";

export interface AppInputSwitcherProps
  extends Omit<
      AppTextInputFieldProps &
        AppSelectFieldProps &
        AppDatePickerProps &
        AppAutoCompleteProps,
      OMIT_KEYS
    >,
    RegisterOptions {
  type: keyof AllFields;
  variant: "standard" | "material";
  className?: string;
  name: string;
}
interface AllFields {
  button?: any;
  checkbox?: any;
  color?: any;
  date?: any;
  "datetime-local"?: any;
  email?: any;
  file?: any;
  hidden?: any;
  image?: any;
  month?: any;
  number?: any;
  password?: any;
  radio?: any;
  range?: any;
  reset?: any;
  search?: any;
  submit?: any;
  tel?: any;
  text?: any;
  time?: any;
  url?: any;
  week?: any;
  select?: any;
  switch?: any;
  autoComplete?: any;
}
