import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_PROJECTS = gql`
  query getProjects($departmentId: ID) {
    getProjects(departmentId: $departmentId) {
      id
      projectno
      projectname
      projectdescription
      department {
        departmentno
        departmentname
      }
      createdAt
      username
    }
  }
`;

//Load Department
export const LOAD_PROJECT = gql`
  query ($projectId: ID!) {
    getProject(projectId: $projectId) {
      id
      createdAt
      username
      projectno
      projectname
      projectdescription
      department {
        departmentname
      }
    }
  }
`;

export const useProject = (projectId) => {
  const { data, error, loading } = useQuery(LOAD_PROJECT, {
    variables: {
      projectId,
    },
  });
  return {
    data,
    error,
    loading,
  };
};

export const useProjects = (departmentId) => {
  const { data, error, loading } = useQuery(LOAD_PROJECTS, {
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

//Add Component Project
export const ADD_PROJECT = gql`
  mutation createProject(
    $projectno: String!
    $projectname: String!
    $projectdescription: String!
    $department: String!
  ) {
    createProject(
      createProjectInput: {
        projectno: $projectno
        projectname: $projectname
        projectdescription: $projectdescription
        department: $department
      }
    ) {
      id
      projectno
      projectname
      projectdescription
      createdAt
    }
  }
`;

//Update Component Department
export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $projectno: String
    $projectname: String
    $projectdescription: String
    $department: String
  ) {
    updateProject(
      projectId: $projectId
      project: {
        projectno: $projectno
        projectname: $projectname
        projectdescription: $projectdescription
        project: $department
      }
    ) {
      id
      projectno
      projectname
      projectdescription
      username
      department
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId)
  }
`;
