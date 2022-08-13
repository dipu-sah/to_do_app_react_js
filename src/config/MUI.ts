import { createTheme } from "@mui/material";
import {
  MuiButtonStylesOverridden,
  MuiButtonVariantsOverridden,
} from "./Buttons";
import {
  MuiTextFieldStylesOverridden,
  MuiTextFieldVariantsOverridden,
} from "./TextFields";

export const MuiTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: MuiTextFieldStylesOverridden,
      variants: MuiTextFieldVariantsOverridden,
    },
    MuiButton: {
      styleOverrides: MuiButtonStylesOverridden,
      variants: MuiButtonVariantsOverridden,
    },
  },
});
