import { ComponentsVariants } from "@mui/material/styles/variants";
import { ComponentsOverrides } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material";

export const MuiTextFieldVariantsOverridden: ComponentsVariants["MuiTextField"] =
  [
    {
      props: { variant: "standard" },
      style: ({ theme }) => ({
        "&.MuiFormControl-root": {
          display: "flex",
          gap: "0.3rem",
          height: "100%",
          minHeight: "fit",
        },

        "label ": {
          transition: "none",
          width: "100%",
          fontSize: "0.9rem",
          height: "fit-content",
          transform: "none",
          position: "unset",
        },
        "& .MuiInputBase-root": {
          margin: 0,
          padding: 0,
          position: "unset ",
          height: "100%",
          content: "unset",
          border: "0",
          "&:after,&:before,&:hover:not(.Mui-disabled)::before": {
            border: "0",
          },
        },
        "& .MuiInputBase-input": {
          borderRadius: "0.3rem",
          grow: "1",
          position: "relative",
          backgroundColor:
            theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
          border: "1px solid #ced4da",
          width: "100%",
          padding: "0",
          minHeight: "3rem",
          maxHeight: "100%",
          transition: "none",
          transform: "none",
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          "&:focus": {
            transition: "none",
            transform: "none",
            boxShadow: "none",
            borderColor: theme.palette.primary.main,
          },
        },
      }),
    },
  ];
export const MuiTextFieldStylesOverridden: ComponentsOverrides<Theme>["MuiTextField"] =
  {};
