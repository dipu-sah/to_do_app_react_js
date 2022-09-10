import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material";

export const MuiTypographyOverriddenStyles: ComponentsOverrides<Theme>["MuiTypography"] =
  {
    root: {
      fontSize: "0.8rem",
    },
  };
