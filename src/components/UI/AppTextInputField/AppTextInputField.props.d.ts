import {
  StandardTextFieldProps,
  TextFieldProps,
} from "@mui/material/TextField/TextField";

export interface AppTextInputFieldProps
  extends TextFieldProps,
    StandardTextFieldProps {
  variant?: "material" | "standard";
}
