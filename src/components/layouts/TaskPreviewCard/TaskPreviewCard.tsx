import { AppMenu } from "../../UI/AppMenu/AppMenu";
import { useRef, useState } from "react";
import { AppMenuProps } from "../../UI/AppMenu/AppMenuProps";
import { DeleteForever, EditOutlined } from "@mui/icons-material";
import { TaskPreviewCardProps } from "./TaskPreviewCardProps";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppButton } from "../../UI/AppButton/AppButton";
import { AppModal } from "../../UI/AppModal/AppModal";
import { AppTaskDetails } from "../AppTaskDetails/AppTaskDetails";
import { AppText } from "../../UI/AppText/AppText";

export function TaskPreviewCard({
  description,
  isCompleted = false,
  dueDate,
  title,
  parentClass = "",
  descriptionClass = "",
  onTaskUpdate = () => {},
  onTaskDelete = () => {},
  id,
  assignedUsers,
}: TaskPreviewCardProps): JSX.Element {
  const rootContainer = useRef<HTMLDivElement | null>(null);
  const [openMenuTo, setOpenMenuTo] = useState<null | Element>(
    rootContainer.current
  );

  const [menuPos, setMenuPos] = useState<AppMenuProps["position"]>();
  const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setOpenMenuTo(null);
        setIsShowingDetails(true);
      }}
      ref={rootContainer}
      onContextMenu={(e) => {
        if (isShowingDetails) {
          return;
        }
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
      <AppModal
        open={isShowingDetails}
        onClose={() => {
          setIsShowingDetails(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        modalTitle={
          <>
            <AppText title={"Title of Task"} fontSize={"1rem"}>
              {title}
            </AppText>
            <AppText title={"Due Date"} fontSize={"0.8rem"}>
              {dueDate.toLocaleString()}
            </AppText>
          </>
        }
      >
        <AppTaskDetails
          taskDetails={{
            description,
            id,
            title,
            dueDate,
            isCompleted,
            assignedUsers,
          }}
        />
      </AppModal>
      <header
        className={"flex flex-row border-b-[0px] border-solid border-white"}
      >
        <AppText
          fontSize={"1.5rem"}
          variant={"h2"}
          title={"Title of the task"}
          lines={1}
          className={"w-full"}
        >
          {title}
        </AppText>
        <AppButton
          title={isCompleted ? "Mark as uncompleted" : "Mark as Completed"}
          iconOnly={true}
          onClick={(e) => {
            e.stopPropagation();
            onTaskUpdate({
              id: id,
              title: title,
              description: description,
              isCompleted: !isCompleted,
              dueDate,
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
              e.preventDefault();
              e.stopPropagation();
              onTaskDelete(id);
            },
          },
          {
            label: "Edit this task",
            icon: <EditOutlined />,
            onClick: (e) => {
              setIsShowingDetails(true);
            },
          },
        ]}
      />
      <main
        className={"text-sm line-clamp-5 h-24 text-justify " + descriptionClass}
      >
        <AppText title={"Description of the task"} lines={3}>
          {description}
        </AppText>
      </main>
      <footer></footer>
    </div>
  );
}
