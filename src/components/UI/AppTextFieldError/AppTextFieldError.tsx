import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

export function AppTextFieldError({
  children = <></>,
}: {
  children?: ReactNode;
}) {
  return (
    <div className={"w-full box-border"}>
      <Typography color={"error"} className={"text-sm"}>
        {children}
      </Typography>
    </div>
  );
}
