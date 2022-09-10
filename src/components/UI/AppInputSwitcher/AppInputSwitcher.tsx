import {
  AllFields,
  AppInputSwitcherProps,
  AppInputTypes,
} from "./AppInputSwitcher.props";
import { AppTextInputField } from "../AppTextInputField/AppTextInputField";
import React, { ForwardedRef, forwardRef } from "react";
import { AppSelect } from "../AppSelectFields/AppSelectFields";
import { AppToggleSwitch } from "../AppToggleSwitch/AppToggleSwitch";
import { AppCheckBox } from "../AppCheckBox/AppCheckBox";
import { AppRadioButton } from "../AppRadioButtons/AppRadioButton";
import { AppDatePicker } from "../AppDatePicker/AppDatePicker";
import { AppAutoComplete } from "../AppAutoCompete/AutoComplete";
import { JsxElement } from "typescript";

export const AppInputSwitcher = forwardRef<
  HTMLInputElement,
  AppInputSwitcherProps
>(AppInputSwitcherComponent);

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
    radio: AppRadioButton,
    date: AppDatePicker,
    autoComplete: AppAutoComplete,
  };
  const PROPS: typeof otherProps & { checked?: boolean } = {
    ...otherProps,
  };
  const InputComponent: any =
    Fields[type as keyof AllFields] || AppTextInputField;

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
