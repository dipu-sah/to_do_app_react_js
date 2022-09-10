import { AutocompleteProps } from "@mui/material";
import { SingleOption } from "../../../../src/@types/Options";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";

export interface AppAutoCompleteProps
  extends AutocompleteProps<SingleOption, false, true, false>,
    AppTextInputFieldProps {
  name: string;
}
