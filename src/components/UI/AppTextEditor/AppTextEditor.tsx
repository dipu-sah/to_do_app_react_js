import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";

export function AppTextEditor() {
  const t: EditorState = EditorState.createEmpty();
  return (
    <>
      <Editor
        editorState={t}
        onChange={(e: any) => {
          console.log(e);
        }}
      />
    </>
  );
}
