import {AppInputSwitcherProps} from "./AppInputSwitcher.props";
import {AppTextInputField} from "../AppTextInputField/AppTextInputField";
import React, {ForwardedRef} from "react";
import {AppSelect} from "../AppSelectFields/AppSelectFields";
import {AppToggleSwitch} from "../AppToggleSwitch/AppToggleSwitch";
import {AppCheckBox} from "../AppCheckBox/AppCheckBox";
import {AppRadioButton} from "../AppRadioButtons/AppRadioButton";

export const AppInputSwitcher = React.forwardRef<any, any>(
  AppInputSwitcherComponent
);
interface AllFields {
  button?:any;
  checkbox?: any;
  color?:any;
  date?:any;
  "datetime-local"?:any;
  email?:any;
  file?:any;
  hidden?:any;
  image?:any;
  month?: any;
  number?: any;
  password?: any;
  radio?: any;
  range?: any;
  reset?: any;
  search?:any;
  submit?:any;
  tel?: any;
  text?: any;
  time?:any;
  url?:any;
  week?: any;
  select?: any;
  switch?: any;
}
type validKeysForFormFields =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "switch";

function AppInputSwitcherComponent(
  {
    type,
    variant,
    className = "",
    required,
    minLength,
    maxLength,
    pattern,
    ...otherProps
  }: AppInputSwitcherProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const Fields: AllFields = {
    text: AppTextInputField,
    select: AppSelect,
    switch: AppToggleSwitch,
    checkbox: AppCheckBox,
    radio:AppRadioButton,
  };
  const PROPS: typeof otherProps & { checked?: boolean } = {
    ...otherProps,
  };
  const InputComponent:any = Fields[type as validKeysForFormFields] || AppTextInputField;

  const shouldIncludeChecked: string[] = ["switch", "checkbox"];
  if (shouldIncludeChecked.includes(type.toLowerCase())) {
    PROPS.checked = !!otherProps.value;
    delete otherProps.value;
  }
  return (
    <div className={"h-fit " + className}>
      <InputComponent type={type} variant={variant} {...PROPS} ref={ref} />
    </div>
  );
}
