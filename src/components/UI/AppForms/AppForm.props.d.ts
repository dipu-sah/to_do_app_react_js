import { AppInputSwitcherProps } from "../AppInputSwitcher/AppInputSwitcher.props";
import { ReactNode } from "react";
import { AppCardProps } from "../AppCard/AppCardProps";

type inputValue = Record<string, string | string[] | File | File[]>;

export interface AppFormProps<ValueType> {
  formFields?: AppInputSwitcherProps[];
  values?: ValueType;
  children?: ReactNode;
  onChange?: (e: ValueType) => void;
  onSubmit?: (e: ValueType) => void;
  className?: string;
  shouldReset?: boolean;
  cardProps?: AppCardProps;
  onBlur?: (values: ValueType) => void;
}
