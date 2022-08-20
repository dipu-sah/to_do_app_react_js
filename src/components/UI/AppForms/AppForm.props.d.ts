import { AppInputSwitcherProps } from "../AppInputSwitcher/AppInputSwitcher.props";
import { ReactNode } from "react";

type inputValue = Record<string, string | string[] | File | File[]>;

export interface AppFormProps<ValueType> {
  formFields?: AppInputSwitcherProps[];
  values?: ValueType;
  children?: ReactNode;
  onChange?: (e: ValueType) => void;
  onSubmit?: (e: ValueType) => void;
  className?: string;
  shouldReset?: boolean;
}
