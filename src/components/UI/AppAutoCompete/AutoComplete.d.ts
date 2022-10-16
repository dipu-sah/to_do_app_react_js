import { AutocompleteProps } from "@mui/material";
import { iSingleOption, SingleOption } from "../../../../src/@types/Options";
import { AppTextInputFieldProps } from "../AppTextInputField/AppTextInputField.props";

export interface AppAutoCompleteProps
  extends Omit<AutocompleteProps<SingleOption, false, true, false>, "onChange">,
    AppTextInputFieldProps {
  onChange: (value: iSingleOption) => void;
  name: string;
}
