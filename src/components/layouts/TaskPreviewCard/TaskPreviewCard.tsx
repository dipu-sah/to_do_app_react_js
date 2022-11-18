import { AppMenu } from "../../UI/AppMenu/AppMenu";
import { useRef, useState } from "react";
import { AppMenuProps } from "../../UI/AppMenu/AppMenuProps";
import { DeleteForever } from "@mui/icons-material";
import { TaskPreviewCardProps } from "./TaskPreviewCardProps";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppButton } from "../../UI/AppButton/AppButton";

export function TaskPreviewCard({
  description,
  isCompleted = false,
  title,
  parentClass = "",
  descriptionClass = "",
}: TaskPreviewCardProps): JSX.Element {
  const rootContainer = useRef<HTMLDivElement | null>(null);
  const [openMenuTo, setOpenMenuTo] = useState<null | Element>(
    rootContainer.current
  );

  const [menuPos, setMenuPos] = useState<AppMenuProps["position"]>();

  return (
    <div
      ref={rootContainer}
      onContextMenu={(e) => {
        e.preventDefault();
        setOpenMenuTo(null);
        setOpenMenuTo(openMenuTo == null ? e.currentTarget : null);
        setMenuPos({
          top: e.clientY,
          left: e.clientX,
        });
      }}
      className={
        "w-full mx-h-fit rounded-lg box-border p-2 text-white" +
        " flex flex-col gap-2" +
        " " +
        parentClass
      }
    >
      <header className={"flex flex-row"}>
        <h2 className={"font-bold text-2xl line-clamp-1 grow"}>{title}</h2>
        <AppButton variant={"text"}>
          <CheckIcon
            titleAccess={"Toggle status of task"}
            color={isCompleted ? "success" : "error"}
            sx={{
              backgroundColor: "white",
              borderRadius: "100%",
              boxSizing: "box-Border",
              padding: 0,
              margin: 0,
            }}
          />
        </AppButton>
        <AppButton className={"bg-transparent"}>
          <MoreVertIcon />
        </AppButton>
      </header>
      <AppMenu
        open={!!openMenuTo}
        onClose={() => {}}
        anchorEl={openMenuTo}
        position={menuPos}
        menuItems={[{ label: "Delete", icon: <DeleteForever /> }]}
      />
      <main
        className={"text-sm line-clamp-5 h-24 text-justify " + descriptionClass}
      >
        {description}
      </main>
      <footer></footer>
    </div>
  );
}
