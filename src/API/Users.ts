import { gql, useMutation, useQuery } from "@apollo/client";
import { UserRegistration } from "../@types/DTO/requests/Users";

export class Users {
  static token?: string;

  register(userDetails: UserRegistration) {
    const query = `mutation users{
new(userDetails:${userDetails})
  }`;
    return useMutation(
      gql`
        ${query}
      `,
      {
        onError(e) {
          console.log(e);
        },
        onCompleted(e) {
          console.log(e);
        },
      }
    );
  }

  makeLogin(userName: string, password: string) {
    const query = `query auth{
login(loginDetails:{
  username: "${userName}",
  password: "${password}"
})
  }`;
    return useQuery(
      gql`
        ${query}
      `,
      {
        onCompleted(e) {
          Users.token = e.login;
        },
      }
    );
  }

  checkIfUserExists(userName: string) {
    const query = `query users{
  userExists(email:"${userName}")
  }`;
    return useQuery(
      gql`
        ${query}
      `,
      {
        onCompleted(e) {
          console.log(e);
        },
      }
    );
  }
}
