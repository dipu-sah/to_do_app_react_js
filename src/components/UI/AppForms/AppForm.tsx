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
    onChange = () => {},
  }: AppFormProps<Record<any, any>>,
  ref: ForwardedRef<HTMLFormElement>
) {
  const submissionButtonContainer = useRef<any>();
  const [formFieldsStates, setFormFieldsState] =
    useState<AppInputSwitcherProps[]>(formFields);
  const allFormFieldsRef = useRef<HTMLInputElement[]>([]);

  function makeSubmission() {
    let alreadyFocused = false;
    setFormFieldsState([
      ...formFields.map((el: AppInputSwitcherProps, index: number) => {
        el.error = false;
        el.helperText = "";
        if (!el.value && el.required) {
          el.error = true;
          el.helperText = "This field is required";
        }
        if (el.error && !alreadyFocused) {
          allFormFieldsRef.current[index].focus();
          alreadyFocused = true;
        }
        return el;
      }),
    ]);
  }

  useEffect(() => {
    const submissionButtons =
      submissionButtonContainer.current?.querySelectorAll("[type='submit']") ||
      [];
    submissionButtons.forEach((el: HTMLButtonElement | HTMLInputElement) => {
      el.type = "button";
      el.addEventListener("click", () => {
        console.log(new Date().toLocaleString());
        makeSubmission();
      });
    });
  }, [submissionButtonContainer]);
  return (
    <form
      className={`${className}`}
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {formFieldsStates.map((el, index) => {
        return (
          <div
            key={index}
            className={`box-border ${el.helperText ? "py-4" : ""}`}
          >
            <AppInputSwitcher
              {...el}
              ref={(e) => (allFormFieldsRef.current[index] = e)}
              value={el.value || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const value = e.currentTarget?.value;
                setFormFieldsState((prev) => {
                  prev[index].value = value;
                  return [...prev];
                });
                onChange({ ...values, [el.name]: value });
              }}
            />
          </div>
        );
      })}
      <div ref={submissionButtonContainer} className={"box-border py-4"}>
        {children}
      </div>
    </form>
  );
}
