import { Typography, TypographyProps } from "@mui/material";
import { AppTooltip } from "../Tooltip/AppTooltip";

export function AppText({
  sx = {},
  lines = 1,
  title = "",
  ...props
}: TypographyProps & { lines?: number }) {
  return (
    <AppTooltip title={title}>
      <Typography
        {...props}
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: lines,
          ...sx,
        }}
      />
    </AppTooltip>
  );
}
