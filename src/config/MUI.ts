import { createTheme } from "@mui/material";
import {
  MuiButtonStylesOverridden,
  MuiButtonVariantsOverridden,
} from "./Buttons";
import {
  MuiTextFieldStylesOverridden,
  MuiTextFieldVariantsOverridden,
} from "./TextFields";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";
import { MuiTypographyOverriddenStyles } from "./MuiTypography";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    deleteTaskButton: PaletteColorOptions;
  }
}

export const MuiTheme = createTheme({
  palette: {
    deleteTaskButton: {
      main: "#c4c4c4",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: MuiTextFieldStylesOverridden,
      variants: MuiTextFieldVariantsOverridden,
    },
    MuiButton: {
      styleOverrides: MuiButtonStylesOverridden,
      variants: MuiButtonVariantsOverridden,
    },
    MuiTypography: {
      styleOverrides: MuiTypographyOverriddenStyles,
    },
  },
});
