import { Autocomplete, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AppTextInputField } from "../AppTextInputField/AppTextInputField";
import { AppAutoCompleteProps } from "./AutoComplete.d";
export function AppAutoComplete({
  name,
  options = [],
  ...otherProps
}: AppAutoCompleteProps) {
  const { control } = useForm();
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Autocomplete
          options={options}
          renderInput={(props) => (
            <TextField label={otherProps.label} name={name} {...props} />
          )}
        />
      )}
    />
  );
}
