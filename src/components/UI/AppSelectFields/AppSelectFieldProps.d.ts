import { SelectProps } from "@mui/material";
import { SingleOption } from "../../../@types/Options";

export interface AppSelectFieldProps extends SelectProps<string> {
  name: string;
  options?: SingleOption[];
}
