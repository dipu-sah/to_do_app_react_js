import { AppInputSwitcher } from "../../UI/AppInputSwitcher/AppInputSwitcher";

export function TaskPreviewCard(): JSX.Element {
  return (
    <div>
      <header>
        <AppInputSwitcher type={"text"} variant={"standard"} name={"title"} />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
