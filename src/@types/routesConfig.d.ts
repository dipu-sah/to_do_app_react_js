import { RouteProps } from "react-router/lib/components";

export interface RoutesConfig extends RouteProps {
  name: string;
  isEnabled: boolean;
}
