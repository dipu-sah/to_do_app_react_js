import { AppUserLoginProps } from "./AppUserLoginProps";
import { AppForm } from "../../UI/AppForms/AppForm";
import { AppButton } from "../../UI/AppButton/AppButton";

export function AppUserLoginForm({}: AppUserLoginProps) {
  return (
    <section className={"w-full h-full"}>
      {/*<header>Login</header>*/}
      <AppForm
        cardProps={{
          raised: false,
          elevation: 0,
        }}
        formFields={[
          {
            name: "userName",
            variant: "material",
            type: "text",
            label: "ABC",
          },
          {
            name: "password",
            variant: "material",
            type: "password",
            label: "ABC",
          },
        ]}
      >
        <AppButton>Login</AppButton>
      </AppForm>
      <footer></footer>      
    </section>
  );
}
