export interface iSingleOption {
  value?: string;
  label: string;
}

export type SingleOption = iSingleOption | string;
export type OptionsArray = SingleOption[];
