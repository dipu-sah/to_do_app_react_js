import { PopoverProps } from "@mui/material/Popover/Popover";
import { MenuItemProps } from "@mui/material";
import { ReactNode } from "react";

export interface AppMenuProps {
  open: boolean;
  onClose: () => void;
  anchorEl: PopoverProps["anchorEl"];
  position?: { top: number; left: number };
  menuItems?: (MenuItemProps & {
    label: string;
    icon?: ReactNode;
  })[];
}
