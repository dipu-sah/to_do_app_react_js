import { MenuItemProps, MenuProps } from "@mui/material";
import { ReactNode } from "react";

type omit_keys_fromMenu_props = "anchorPosition";

export interface AppMenuProps
  extends Omit<MenuProps, omit_keys_fromMenu_props> {
  open: boolean;
  onClose: () => void;
  position?: { top: number; left: number };
  menuItems?: (MenuItemProps & {
    label: string;
    icon?: ReactNode;
  })[];
}
