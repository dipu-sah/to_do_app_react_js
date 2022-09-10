import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { ChangeEvent, ForwardedRef, forwardRef, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { AppDatePickerProps } from "./AppDatePicker.props";

export const AppDatePicker = forwardRef(
  (
    { onChange = () => {}, ...props }: AppDatePickerProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { control } = useForm();
    const DatePickerRef = useRef();
    return (
      <Controller
        control={control}
        name={props.name}
        render={() => (
          <>
            <DatePicker
              {...props}
              inputRef={ref}
              inputFormat="dd MMM, yyyy"
              onChange={(e: Date | null, v: any) => {
                const value = v || e;
                if (value) {
                  onChange({
                    target: DatePickerRef?.current || { value },
                    currentTarget: DatePickerRef?.current || { value },
                    bubbles: true,
                    type: "change",
                    isTrusted: true,
                    timeStamp: Date.now(),
                    defaultPrevented: false,
                  } as ChangeEvent<HTMLInputElement>);
                }
              }}
              ref={ref}
              renderInput={(params) => (
                <TextField {...params} fullWidth={true} />
              )}
            />
          </>
        )}
      />
    );
  }
);
