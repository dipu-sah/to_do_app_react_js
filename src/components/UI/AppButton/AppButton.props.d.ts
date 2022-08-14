import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export interface AppButtonProps extends ButtonProps {
  children: string | ReactNode;
}
