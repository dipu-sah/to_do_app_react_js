import { Autocomplete, AutocompleteValue } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AppTextInputField } from "../AppTextInputField/AppTextInputField";
import { AppAutoCompleteProps } from "./AutoComplete.d";
import { iSingleOption, SingleOption } from "../../../@types/Options";

export function AppAutoComplete({
  name,
  options = [],
  onChange = () => {},
  ...otherProps
}: AppAutoCompleteProps) {
  const { control } = useForm();
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Autocomplete
          fullWidth
          options={options}
          getOptionLabel={(e) => {
            if (typeof e === "string") {
              return e;
            }
            return e.label;
          }}
          onChange={(
            e,
            v: AutocompleteValue<SingleOption, false, false, false>
          ) => {
            let label = "";
            let value: string | undefined = "";
            if (typeof v == "string") {
              label = v;
              value = v;
            } else {
              label = v?.label || "";
              value = v?.value;
            }
            onChange({
              value: value,
              label: label,
            } as iSingleOption);
          }}
          renderInput={(props) => (
            <AppTextInputField
              label={otherProps.label}
              name={name}
              {...props}
            />
          )}
        />
      )}
    />
  );
}
