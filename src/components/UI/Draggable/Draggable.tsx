import { MouseEvent, useRef, useState } from "react";
import { DraggableProps } from "./Draggable.props";

export function Draggable({ children }: DraggableProps) {
  const rootContainer = useRef<HTMLDivElement | null>(null);
  const [xMovement, setXMovement] = useState<number>(0);
  const [yMovement, setYMovement] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    let xMoved = e.movementX;
    let yMoved = e.movementY;
    setXMovement(xMovement + xMoved);
    setYMovement(yMovement + yMoved);
  }

  function unSetDragging() {
    setIsDragging(false);
  }

  return (
    <div
      style={{
        transform: `translate(${xMovement}px,${yMovement}px) scale(${
          isDragging ? 1.2 : 1
        })`,
        zIndex: isDragging ? 1000 : "auto",
        rotate: isDragging ? "1deg" : "0deg",
      }}
      ref={rootContainer}
      draggable={true}
      onDragStart={(e) => {
        e.preventDefault();
        console.log(e);
      }}
      onMouseDown={(e) => {
        setIsDragging(true);
      }}
      onMouseUp={(e) => {
        unSetDragging();
      }}
      onMouseLeave={(e) => {
        setIsDragging(false);
      }}
      onMouseMove={(e) => {
        if (isDragging) {
          handleMouseMove(e);
        }
      }}
      className={`${isDragging ? "cursor-grab select-none" : ""}`}
    >
      {children}
    </div>
  );
}
