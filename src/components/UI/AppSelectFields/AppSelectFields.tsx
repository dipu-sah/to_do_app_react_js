import { MenuItem, Select } from "@mui/material";
import { AppSelectFieldProps } from "./AppSelectFieldProps";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import { SingleOption } from "../../../@types/Options";

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
          {options.map((e: SingleOption, index) => {
            let label = "";
            let value = "";
            if (typeof e === "string") {
              label = e;
              value = e;
            } else {
              label = e.label;
              value = e.value || e.label;
            }
            return (
              <MenuItem key={index} value={value}>
                {label}
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
