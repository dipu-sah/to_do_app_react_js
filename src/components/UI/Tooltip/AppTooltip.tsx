import { Tooltip, TooltipProps } from "@mui/material";

export function AppTooltip({ arrow = true, ...props }: TooltipProps) {
  return <Tooltip {...props} children={props.children} arrow={arrow} />;
}
