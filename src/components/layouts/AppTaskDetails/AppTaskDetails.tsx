import { AppTaskDetailsProps } from "./AppTaskDetailsProps";
import { useState } from "react";
import { Task } from "../../../@types/DTO/requests/Tasks";
import { AppTextEditor } from "../../UI/AppTextEditor/AppTextEditor";
import { ContentState, EditorState } from "draft-js";

export function AppTaskDetails({
  taskDetails,
  onChange = () => {},
}: AppTaskDetailsProps) {
  const [tempTaskDetails, setTempTaskDetails] = useState<Task>({
    ...taskDetails,
  });
  const [detailsUpdatedAt, setDetailsUpdatedAt] = useState<Date | null>(null);
  const [descriptionEditorState, setDescriptionEditorState] =
    useState<EditorState>(() =>
      EditorState.createWithContent(
        ContentState.createFromText(tempTaskDetails.description || "")
      )
    );
  return (
    <div className={"w-full h-full"}>
      <div className={"h-[10vh]"}>
        <AppTextEditor
          editorState={descriptionEditorState}
          onChange={(e) => {
            setDescriptionEditorState(e);
            setTempTaskDetails({
              ...tempTaskDetails,
              description: e.getCurrentContent().getPlainText(),
            });
            setDetailsUpdatedAt(new Date());
          }}
        />
      </div>
    </div>
  );
}
