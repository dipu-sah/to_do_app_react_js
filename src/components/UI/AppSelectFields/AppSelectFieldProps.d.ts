import { SelectProps } from "@mui/material";
import { iFromOptions } from "../../../@types/formFields";

export interface AppSelectFieldProps extends SelectProps {
  name: string;
  options?: iFromOptions[];
}
