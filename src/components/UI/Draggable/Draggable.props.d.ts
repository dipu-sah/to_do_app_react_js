import { ReactNode } from "react";

export interface DraggableProps {
  children: ReactNode | ReactNode[];
  onDragStart?: () => void;
}
