import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { SingleOption } from "../../../@types/Options";

export function AppRadioButton({
  variant = "standard",
  options = [],
  value,
  ...props
}: RadioProps & {
  variant?: "standard" | "material";
  options?: SingleOption[];
}) {
  const { control } = useForm();
  return (
    <Controller
      control={control}
      name={props.name || ""}
      render={() => (
        <RadioGroup value={value} {...(props as RadioGroupProps)}>
          {options.map((e: SingleOption, index) => {
            let label = "";
            let value: string | undefined = "";
            if (typeof e === "string") {
              label = e;
              value = e;
            } else {
              label = e.label;
              value = e.value;
            }
            return (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={label}
                key={index}
              />
            );
          })}
        </RadioGroup>
      )}
    />
  );
}
