import { Fab, FabProps } from "@mui/material";
import { AppTooltip } from "../Tooltip/AppTooltip";

export function AppFab({ title = "", sx, ...props }: FabProps) {
  return (
    <AppTooltip title={title}>
      <Fab
        {...props}
        sx={{ position: "fixed", right: 12, bottom: 12, ...sx }}
      />
    </AppTooltip>
  );
}
