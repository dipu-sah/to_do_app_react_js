export type SingleOption =
  | string
  | {
      value?: string;
      label: string;
    };
export type OptionsArray = SingleOption[];
