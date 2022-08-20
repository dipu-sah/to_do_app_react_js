import {MenuItem, Select} from "@mui/material";
import {AppSelectFieldProps} from "./AppSelectFieldProps";
import {Controller, useForm} from "react-hook-form";
import React from "react";
import {iFromOptions} from "../../../@types/formFields";

function AppSelectFieldComponent(
  { options = [], variant, ...props }: AppSelectFieldProps,
  ref: any
) {
  const { control } = useForm();
  return (
    <Controller
      name={props.name}
      control={control}
      render={() => (
        <Select fullWidth={true} {...props} variant={variant} ref={ref}>
          {options.map((e:iFromOptions, index) => {
            return (
              <MenuItem key={index} value={e.value}>
                {e.label}
              </MenuItem>
            );
          })}
        </Select>
      )}
    />
  );
}
export const AppSelect = React.forwardRef<
  HTMLSelectElement,
  AppSelectFieldProps
>(AppSelectFieldComponent);
