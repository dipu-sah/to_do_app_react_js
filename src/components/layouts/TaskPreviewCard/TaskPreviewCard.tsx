import { AppMenu } from "../../UI/AppMenu/AppMenu";
import { useRef, useState } from "react";
import { AppMenuProps } from "../../UI/AppMenu/AppMenuProps";
import { DeleteForever, EditOutlined } from "@mui/icons-material";
import { TaskPreviewCardProps } from "./TaskPreviewCardProps";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppButton } from "../../UI/AppButton/AppButton";
import { AppTooltip } from "../../UI/Tooltip/AppTooltip";

export function TaskPreviewCard({
  description,
  isCompleted = false,
  title,
  parentClass = "",
  descriptionClass = "",
  onTaskUpdate = () => {},
  onTaskDelete = () => {},
  id,
}: TaskPreviewCardProps): JSX.Element {
  const rootContainer = useRef<HTMLDivElement | null>(null);
  const [openMenuTo, setOpenMenuTo] = useState<null | Element>(
    rootContainer.current
  );

  const [menuPos, setMenuPos] = useState<AppMenuProps["position"]>();

  return (
    <div
      onClick={() => {
        setOpenMenuTo(null);
      }}
      ref={rootContainer}
      onContextMenu={(e) => {
        e.preventDefault();
        setOpenMenuTo(openMenuTo == null ? e.currentTarget : null);
        setMenuPos({
          top: e.clientY,
          left: e.clientX,
        });
      }}
      className={
        "w-full mx-h-fit rounded-lg box-border p-2" +
        " flex flex-col gap-2" +
        " " +
        parentClass
      }
    >
      <header
        className={"flex flex-row border-b-[0px] border-solid border-white"}
      >
        <AppTooltip title={"Title of the task"}>
          <h2 className={"font-bold text-2xl line-clamp-1 grow"}>{title}</h2>
        </AppTooltip>
        <AppButton
          title={isCompleted ? "Mark as uncompleted" : "Mark as Completed"}
          iconOnly={true}
          onClick={() => {
            onTaskUpdate({
              id: id,
              title: title,
              description: description,
              isCompleted: !isCompleted,
            });
          }}
        >
          <CheckIcon
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
        <AppButton
          title={"More options"}
          iconOnly={true}
          className={"w-fit"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuPos({ top: e.clientY, left: e.clientX });
            setOpenMenuTo(e.currentTarget);
          }}
        >
          <MoreVertIcon sx={{ color: "white" }} />
        </AppButton>
      </header>
      <AppMenu
        open={!!openMenuTo}
        onClose={() => {}}
        anchorEl={openMenuTo}
        position={menuPos}
        menuItems={[
          {
            label: "Delete this task",
            icon: <DeleteForever color={"error"} />,
            onClick: (e) => {
              onTaskDelete(id);
            },
          },
          {
            label: "Edit this task",
            icon: <EditOutlined />,
            onClick: (e) => {},
          },
        ]}
      />
      <AppTooltip title={"Description of the task"}>
        <main
          className={
            "text-sm line-clamp-5 h-24 text-justify " + descriptionClass
          }
        >
          {description}
        </main>
      </AppTooltip>
      <footer></footer>
    </div>
  );
}
