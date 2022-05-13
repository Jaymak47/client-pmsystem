import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_USERS = gql`
  query getUsers($departmentId: ID) {
    getUsers(departmentId: $departmentId) {
      id
      username
      firstname
      surname
      othernames
      email
      mobileno
      payrollno
      designation
      department {
        departmentname
      }
      jobgroup {
        jobgroupname
      }
      role {
        rolesname
      }
    }
  }
`;

export const useUsers = (departmentId) => {
  const { data, error, loading } = useQuery(LOAD_USERS, {
    variables: {
      departmentId,
    },
  });
  return {
    data,
    error,
    loading,
  };
};

export const LOAD_USER = gql`
  query ($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      firstname
      surname
      othernames
      email
      mobileno
      payrollno
      designation
      department {
        departmentname
      }
    }
  }
`;

export const useUser = (userId) => {
  const { data, error, loading } = useQuery(LOAD_USER, {
    variables: {
      userId,
    },
  });
  return {
    data,
    error,
    loading,
  };
};

export const STAFF_LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      payrollno
      surname
      firstname
      designation
      createdAt
      token
    }
  }
`;

//Add Component User
export const ADD_STAFF = gql`
  mutation register(
    $username: String!
    $firstname: String!
    $surname: String!
    $othernames: String!
    $email: String!
    $mobileno: String!
    $password: String!
    $confirmPassword: String!
    $payrollno: String!
    $jobgroup: String!
    $department: String!
    $designation: String!
    $role: String!
  ) {
    register(
      registerInput: {
        username: $username
        firstname: $firstname
        surname: $surname
        othernames: $othernames
        email: $email
        mobileno: $mobileno
        password: $password
        confirmPassword: $confirmPassword
        payrollno: $payrollno
        jobgroup: $jobgroup
        department: $department
        designation: $designation
        role: $role
      }
    ) {
      id
      email
      username
      designation
      createdAt
      token
    }
  }
`;
