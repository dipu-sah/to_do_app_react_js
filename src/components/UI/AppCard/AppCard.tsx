import { Card, CardProps } from "@mui/material";

export function AppCard({
  backgroundColor = "",
  className,
  ...props
}: CardProps & { backgroundColor?: string }) {
  return <Card {...props} className={"w-full" + " " + className} />;
}
