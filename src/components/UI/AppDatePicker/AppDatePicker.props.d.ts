import { TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";
export interface AppDatePickerProps
  extends Omit<DatePickerProps<Date, Date>, "renderInput" | "onChange">,
    AppTextInputFieldProps {}
