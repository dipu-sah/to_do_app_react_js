import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { AppMenuProps } from "./AppMenuProps";

export function AppMenu({
  open,
  onClose,
  anchorEl,
  position,
  menuItems = [],
  ...props
}: AppMenuProps): JSX.Element {
  if (!menuItems.length) {
    return <></>;
  }
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorReference="anchorPosition"
      anchorPosition={position}
      {...props}
    >
      {menuItems?.map((e, index) => {
        return (
          <MenuItem {...e} key={index}>
            <>
              {e.icon && (
                <ListItemIcon>{e.icon ? e.icon : <span></span>}</ListItemIcon>
              )}
              <ListItemText>{e.label}</ListItemText>
            </>
          </MenuItem>
        );
      })}
    </Menu>
  );
}
