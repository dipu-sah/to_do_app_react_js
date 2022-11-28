import { AppTextInputFieldProps } from "./AppTextInputField.props";
import { TextField } from "@mui/material";
import React, { ForwardedRef, HTMLInputTypeAttribute, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const AppTextInputField = React.forwardRef(AppTextInputFieldComponent);

export function AppTextInputFieldComponent(
  { variant = "material", ...props }: AppTextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { control } = useForm();
  let tempVariant: "standard" | "outlined" = "standard";
  if (variant === "material") {
    tempVariant = "outlined";
  }
  const [type, setType] = useState<HTMLInputTypeAttribute>(
    props.type || "text"
  );
  return (
    <Controller
      control={control}
      name={props.name}
      render={() => (
        <TextField
          fullWidth={true}
          variant={tempVariant}
          inputRef={ref}
          InputProps={{
            endAdornment:
              type.toLowerCase() === "password" ? (
                <Visibility
                  className={"cursor-pointer"}
                  onClick={() => {
                    setType("text");
                  }}
                />
              ) : type.toLowerCase() === "text" &&
                props?.type?.toLowerCase() === "password" ? (
                <VisibilityOff
                  className={"cursor-pointer"}
                  onClick={() => {
                    setType("password");
                  }}
                />
              ) : null,
            className: "cursor-pointer",

            ...props.InputProps,
          }}
          {...{
            ...props,
            type,
          }}
        />
      )}
    />
  );
}
