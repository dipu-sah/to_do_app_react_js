import React from "react";
import { AllAvailableRouter } from "./router";

function App() {
  // UserApi.makeLogin("dipuxah7@gmail.com", "qwerty1234");
  // UserApi.checkIfUserExists("dipuxah7@gmail.com");
  // UserApi.register({
  //   email: "dipuxah7@gmail.com",
  //   firstName: "DIPU",
  //   lastName: "kumar",
  //   middleName: "sah",
  //   password: "1223wseddas",
  //   reTypedPassword: "1223wseddas",
  // });
  return (
    <div className={"h-full"}>
      <AllAvailableRouter />
    </div>
  );
}

export default App;
