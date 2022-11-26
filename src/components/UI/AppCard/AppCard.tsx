import { Card, CardContent } from "@mui/material";
import { AppCardProps } from "./AppCardProps";

export function AppCard({
  backgroundColor = "",
  className,
  children = <></>,
  ...props
}: AppCardProps) {
  return (
    <Card
      {...props}
      className={"w-full bg-red-600" + " " + className}
      classes={{
        root: "",
      }}
    >
      <CardContent className={""}>{children}</CardContent>
    </Card>
  );
}
