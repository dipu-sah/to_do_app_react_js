import "draft-js/dist/Draft.css";
import { Editor, EditorProps } from "draft-js";

export function AppTextEditor(props: EditorProps) {
  return <Editor {...props} />;
}
