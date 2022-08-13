import { ComponentsVariants } from "@mui/material/styles/variants";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material";

export const MuiButtonVariantsOverridden: ComponentsVariants["MuiButton"] = [
  {
    props: { variant: "dashed" },
    style: {
      textTransform: "none",
      border: `2px dashed red !important`,
    },
  },
];
export const MuiButtonStylesOverridden: ComponentsOverrides<Theme>["MuiButton"] =
  {};
