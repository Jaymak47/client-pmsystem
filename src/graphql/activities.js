import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_ACTIVITIES = gql`
  query getActivities($departmentId: ID) {
    getActivities(departmentId: $departmentId) {
      id
      activityno
      activityname
      activitydescription
      createdAt
      tasks {
        taskno
      }
      project {
        projectno
        projectname
        department {
          departmentname
        }
      }
    }
  }
`;

export const LOAD_ACTIVITY = gql`
  query ($activityId: ID!) {
    getActivity(activityId: $activityId) {
      id
      createdAt
      username
      activityno
      activityname
      activitydescription
      tasks {
        taskno
        taskname
        startdate
        enddate
      }
      project {
        projectname
        department {
          departmentname
        }
      }
    }
  }
`;

export const useActivities = (departmentId) => {
  const { data, error, loading, refetch } = useQuery(LOAD_ACTIVITIES, {
    variables: {
      departmentId,
    },
  });
  return {
    data,
    error,
    loading,
    refetch,
  };
};

export const useActivity = (activityId) => {
  const { data, error, loading } = useQuery(LOAD_ACTIVITY, {
    variables: {
      activityId,
    },
  });
  return {
    data,
    error,
    loading,
  };
};

export const ADD_ACTIVITY = gql`
  mutation createActivity(
    $activityno: String!
    $activityname: String!
    $activitydescription: String!
    $project: String!
  ) {
    createActivity(
      createActivityInput: {
        activityno: $activityno
        activityname: $activityname
        activitydescription: $activitydescription
        project: $project
      }
    ) {
      id
      activityno
      activityname
      activitydescription
      project {
        projectname
      }
      createdAt
    }
  }
`;

//Update Component Department
export const UPDATE_ACTIVITY = gql`
  mutation updateActivity(
    $activityno: String!
    $activityname: String!
    $activitydescription: String!
    $project: String!
  ) {
    updateActivity(
      activityId: $activityId
      activity: {
        activityno: $activityno
        activityname: $activityname
        activitydescription: $activitydescription
        project: $project
      }
    ) {
      id
      activityno
      activityname
      activitydescription
      project {
        projectname
      }
      createdAt
    }
  }
`;

export const DELETE_ACTIVITY = gql`
  mutation deleteActivity($activityId: ID!) {
    deleteActivity(activityId: $activityId)
  }
`;
