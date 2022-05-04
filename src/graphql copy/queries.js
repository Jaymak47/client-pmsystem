import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
export const LOAD_PROJECTS = gql`
  query getProjects {
    getProjects {
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

export const LOAD_USERS = gql`
  query getUsers {
    getUsers {
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

export const LOAD_TRAININGS = gql`
  query getTrainings {
    getTrainings {
      id
      training
      trainingdescription
      resources
      startdate
      enddate
    }
  }
`;

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

export const LOAD_DESIGNATIONS = gql`
  query Designations {
    getDesignations {
      id
      designationno
      designationname
      designationdescription
    }
  }
`;

export const LOAD_JOBGROUPS = gql`
  query getJobgroups {
    getJobGroups {
      id
      jobgroupname
    }
  }
`;

export const LOAD_ROLES = gql`
  query getRoles {
    getRoles {
      id
      rolesname
    }
  }
`;

export const LOAD_ACTIVITIES = gql`
  query getActivities {
    getActivities {
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

export const LOAD_TASKS = gql`
  query getTasks {
    getTasks {
      id
      taskno
      taskname
      startdate
      activity {
        activityname
        project {
          projectname
        }
      }
      enddate
      username
      createdAt
    }
  }
`;

export const LOAD_TARGETS = gql`
  query getTargets {
    getTargets {
      id
      targetno
      targetname
      agreedPerformance
      performanceIndicator
      createdAt
      username
      task {
        taskname
        activity {
          activityno
          project {
            projectno
          }
        }
      }
    }
  }
`;
