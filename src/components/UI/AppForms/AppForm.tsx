import React, {
  ChangeEvent,
  ForwardedRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppFormProps } from "./AppForm.props";
import { AppInputSwitcher } from "../AppInputSwitcher/AppInputSwitcher";
import { AppInputSwitcherProps } from "../AppInputSwitcher/AppInputSwitcher.props";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

export const AppForm = React.forwardRef<
  HTMLFormElement,
  AppFormProps<Record<any, any>>
>(AppFormComponent);

function AppFormComponent(
  {
    formFields,
    values,
    children,
    className = "",
    shouldReset = false,
    onChange = () => {},
    onSubmit = () => {},
  }: AppFormProps<Record<any, any>>,
  ref: ForwardedRef<HTMLFormElement>
) {
  const submissionButtonContainer = useRef<any>();
  const {
    formState: { errors },
    setValue,
    getValues,
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });
  const [formFieldsStates, setFormFieldsState] = useState<
    AppInputSwitcherProps[]
  >(formFields || []);
  const allFieldsKeys = formFieldsStates.reduce(
    (prev: Record<string, string>, el) => {
      prev[el.name] = "";
      return prev;
    },
    {}
  );
  useEffect(() => {
    if (shouldReset) {
      reset(allFieldsKeys);
    }
  }, [shouldReset]);

  return (
    <form
      className={`flex flex-col gap-4 ${className}`}
      ref={ref}
      onReset={() => {
        reset(allFieldsKeys);
      }}
      onSubmit={handleSubmit((d) => {
        onSubmit(d);
      })}
    >
      {formFieldsStates.map((el: AppInputSwitcherProps, index: number) => {
        return (
          <div key={index} className={`flex flex-col }`}>
            <AppInputSwitcher
              label={`${el.label} ${el.required ? "*" : ""}`}
              {...el}
              {...register(el.name, {
                required: el.required,
                maxLength: el.maxLength,
                pattern: el.pattern,
                value: getValues(el.name),
                minLength: el.minLength,
              })}
              required={false}
              error={!!errors[el.name]?.message}
              value={getValues(el.name) || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const value = e.currentTarget?.value;
                setFormFieldsState((prev) => {
                  prev[index].value = value;
                  return [...prev];
                });
                setValue(el.name, value);
                onChange({ ...values, [el.name]: value });
              }}
            />
            {errors[el.name]?.message && (
              <div className={"w-full box-border"}>
                <Typography color={"error"} className={"text-sm"}>
                  {errors[el.name]?.message?.toString()}
                </Typography>
              </div>
            )}
          </div>
        );
      })}
      <div ref={submissionButtonContainer} className={"box-border py-4"}>
        {children}
      </div>
    </form>
  );
}
