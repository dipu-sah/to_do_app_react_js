import { Card, CardContent, CardProps } from "@mui/material";

export function AppCard({
  backgroundColor = "",
  className,
  children = <></>,
  ...props
}: CardProps & { backgroundColor?: string }) {
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
