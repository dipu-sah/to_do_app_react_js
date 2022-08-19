import React, {
    ChangeEvent,
    ForwardedRef,
    useRef,
    useState,
} from "react";
import {AppFormProps} from "./AppForm.props";
import {AppInputSwitcher} from "../AppInputSwitcher/AppInputSwitcher";
import {AppInputSwitcherProps} from "../AppInputSwitcher/AppInputSwitcher.props";
import {useForm} from "react-hook-form";

export const AppForm = React.forwardRef<HTMLFormElement,
    AppFormProps<Record<any, any>>>(AppFormComponent);

function AppFormComponent(
    {
        formFields,
        values,
        children,
        className = "",
        onChange = () => {
        },
        onSubmit = () => {
        },
    }: AppFormProps<Record<any, any>>,
    ref: ForwardedRef<HTMLFormElement>
) {
    const submissionButtonContainer = useRef<any>();
    const {formState: {errors}, setValue, getValues, register, handleSubmit} = useForm()
    const [formFieldsStates, setFormFieldsState] =
        useState<AppInputSwitcherProps[]>(formFields || []);

    return (
        <form
            className={`flex flex-col gap-4 ${className}`}
            ref={ref}
            onReset={() => {
                console.log("HELLO")
                console.log(formFieldsStates.reduce((prev: Record<string, string>, el) => {
                    prev[el.name] = ""
                    return prev;
                }, {}))
            }}
            onSubmit={handleSubmit((d) => {
                onSubmit(d)
            })}
        >
            {formFieldsStates.map((el: AppInputSwitcherProps, index) => {
                return (
                    <div
                        key={index}
                        className={`flex flex-col }`}
                    >
                        <AppInputSwitcher
                            {...el}
                            label={`${el.label} ${el.required ? "*" : ""}`}
                            {...register(el.name, {
                                required: {
                                    value: !!el.required,
                                    message: "Please fill this value"
                                },
                                maxLength: {
                                    value: el.maxLength || 9999999999,
                                    message: "Max length exceeded " + el.value?.toString().length + "/" + el.maxLength
                                },
                                pattern: {
                                    value: /[a-zA-Z]+/,
                                    message: "eg: aBcDeF"
                                },
                                value: getValues(el.name),
                                minLength: {
                                    value: el.minLength || 0,
                                    "message": "min length should be"
                                }
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
                                setValue(el.name, value)
                                onChange({...values, [el.name]: value});
                            }}
                        />
                        {errors[el.name]?.message &&
                            <p className={"bg-red-300 text-red-800 w-full box-border px-4"}>
                                {errors[el.name]?.message?.toString()}
                            </p>}
                    </div>
                );
            })}
            <div ref={submissionButtonContainer} className={"box-border py-4"}>
                {children}
            </div>
        </form>
    );
}
