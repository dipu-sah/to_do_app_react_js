import { DialogProps } from "@mui/material";
import { ReactNode } from "react";

export interface AppModalProps extends DialogProps {
  modalTitle?: string | ReactNode;
}
