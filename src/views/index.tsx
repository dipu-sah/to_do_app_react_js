import React, { ChangeEvent, useRef, useState } from "react";
import { AppTextInputField } from "../components/UI/AppTextInputField";

function HomePageComponent(
  props: any,
  ref: React.LegacyRef<HTMLHeadingElement>
) {
  const inputRef = useRef<any>();
  setTimeout(() => {
    inputRef.current?.focus();
  }, 4000);
  const [value, setValue] = useState<string>("");
  return (
    <div className={"h-12 w-32"}>
      <AppTextInputField
        label={"HELLO"}
        ref={inputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          console.log(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export const HomePage = React.forwardRef(HomePageComponent);
