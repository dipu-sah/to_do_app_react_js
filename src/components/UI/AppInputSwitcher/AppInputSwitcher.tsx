import { AppInputSwitcherProps } from "./AppInputSwitcher.props";
import { AppTextInputField } from "../AppTextInputField/AppTextInputField";
import React, {ForwardedRef} from "react";
import {AppTextInputFieldProps} from "../AppTextInputField/AppTextInputField.props";
import {AppSelect} from "../AppSelectFields/AppSelectFields";
import {AppSelectFieldProps} from "../AppSelectFields/AppSelectFieldProps";

export const AppInputSwitcher = React.forwardRef<any, any>(
  AppInputSwitcherComponent
);
interface AllFields{
   'button'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'checkbox'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'color'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'date'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'datetime-local'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'email'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'file'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'hidden'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'image'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'month'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'number'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'password'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'radio'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'range'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'reset'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'search'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'submit'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'tel'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'text'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'time'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'url'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'week'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>> ;
   'select'?:React.ForwardRefExoticComponent<React.PropsWithRef<AppSelectFieldProps> & React.RefAttributes<HTMLSelectElement>> ;
}
type validKeysForFormFields= | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'



function AppInputSwitcherComponent(
  { type, variant, className = "",
      required,
      minLength,
      maxLength,
      pattern,
      ...otherProps }: AppInputSwitcherProps,
  ref: ForwardedRef<HTMLInputElement>
) {

  const Fields:AllFields={
    text:AppTextInputField,
    select:AppSelect,
  }
  const PROPS={
      ...otherProps,
  }
  const InputComponent:React.ForwardRefExoticComponent<React.PropsWithRef<AppTextInputFieldProps> & React.RefAttributes<HTMLInputElement>>  =
      Fields[type as validKeysForFormFields]||AppTextInputField


  return (
    <div className={"h-16 " + className}>
      <InputComponent type={type} variant={variant} {...PROPS} ref={ref}/>
    </div>
  );
}
