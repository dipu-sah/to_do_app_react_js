import { Tooltip, TooltipProps } from "@mui/material";

export function AppTooltip({
  followCursor = true,
  arrow = true,
  ...props
}: TooltipProps) {
  return (
    <Tooltip
      followCursor={followCursor}
      arrow={arrow}
      {...props}
      children={props.children}
    />
  );
}
