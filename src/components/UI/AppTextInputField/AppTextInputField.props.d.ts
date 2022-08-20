import {
  StandardTextFieldProps,
  TextFieldProps,
} from "@mui/material/TextField/TextField";
import { InputHTMLAttributes } from "react";

export interface AppTextInputFieldProps
  extends TextFieldProps,
    StandardTextFieldProps,
    InputHTMLAttributes {
  variant?: "material" | "standard";
  maxLength?: number;
  minLength?: number;
  value?: string;
  name: string;
}
