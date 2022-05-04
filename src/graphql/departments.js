import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_DEPARTMENT = gql`
  query ($departmentId: ID!) {
    getDepartment(departmentId: $departmentId) {
      id
      createdAt
      username
      departmentno
      departmentname
      departmentdescription
    }
  }
`;

export const useDepartment = (departmentId) => {
  const { data, error, loading } = useQuery(LOAD_DEPARTMENT, {
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

export const LOAD_DEPARTMENTS = gql`
  query Departments {
    getDepartments {
      id
      departmentno
      departmentname
      departmentdescription
    }
  }
`;

//Update Component Department
export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment(
    $departmentId: ID!
    $departmentno: String
    $departmentname: String
    $departmentdescription: String
  ) {
    updateDepartment(
      departmentId: $departmentId
      department: {
        departmentno: $departmentno
        departmentname: $departmentname
        departmentdescription: $departmentdescription
      }
    ) {
      id
      departmentno
      departmentname
      departmentdescription
      username
    }
  }
`;

//Add Component Department
export const ADD_DEPARTMENT = gql`
  mutation createDepartment(
    $departmentno: String!
    $departmentname: String!
    $departmentdescription: String!
  ) {
    createDepartment(
      departmentInput: {
        departmentno: $departmentno
        departmentname: $departmentname
        departmentdescription: $departmentdescription
      }
    ) {
      id
      departmentno
      departmentname
      departmentdescription
      createdAt
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($departmentId: ID!) {
    deleteDepartment(departmentId: $departmentId)
  }
`;
