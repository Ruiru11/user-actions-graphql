import gql from "apollo-boost";

export const CREATE_USER = gql`
  mutation createNewUser($input: CreateInput!) {
    createUser(input: $input) {
      user {
        id
        fullName
        email
      }
      message
      token
      errors
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      user {
        id
        fullName
        email
      }
      token
      message
    }
  }
`;

export const GET_USER = gql`
  query getSingleUser($id: ID!) {
    showUser(id: $id) {
      id
      email
      fullName
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      email
      fullName
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateExistingUser($input: UpdateInput!) {
    updateUser(input: $input) {
      user {
        id
        fullName
        email
      }
      errors
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteExistingUser($input: DeleteInput!) {
    deleteUser(input: $input) {
      message
      errors
    }
  }
`;
