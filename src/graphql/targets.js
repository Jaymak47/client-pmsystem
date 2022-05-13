import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_TARGETS = gql`
  query ($userId: ID!) {
    getUser(userId: $userId) {
      id
      targets {
        id
        targetname
        targetno
        startdate
        enddate
        agreedPerformance
        performanceIndicator
        task {
          taskname
        }
        selfScore
        supervisorScore
        jointScore
      }
    }
  }
`;

export const LOAD_APPRAISALS = gql`
  query ($userId: ID!) {
    getUser(userId: $userId) {
      id
      targets {
        id
        targetname
        targetno
        startdate
        enddate
        agreedPerformance
        performanceIndicator
        task {
          taskname
        }
        selfScore
        achievedResult
        supervisorScore
        jointScore
      }
    }
  }
`;

export const ALL_TARGETS = gql`
  query getTargets {
    getTargets {
      id
      targets {
        id
        targetname
        targetno
        startdate
        enddate
        agreedPerformance
        performanceIndicator
        task {
          taskname
        }

        selfScore
        supervisorScore
        jointScore
      }
    }
  }
`;

export const LOAD_TARGET = gql`
  query ($targetId: ID!) {
    getTarget(targetId: $targetId) {
      id
      username
      createdAt
      targetno
      targetname
      agreedPerformance
      performanceIndicator
      startdate
      enddate
      task {
        taskname
      }
      selfScore
      supervisorScore
      jointScore
    }
  }
`;

//Add Component Project
export const ADD_TARGET = gql`
  mutation createTarget(
    $targetno: String!
    $targetname: String!
    $task: String!
    $startdate: String!
    $enddate: String!
    $agreedPerformance: String!
    $performanceIndicator: String!
  ) {
    createTarget(
      createTargetInput: {
        targetno: $targetno
        targetname: $targetname
        task: $task
        startdate: $startdate
        enddate: $enddate
        agreedPerformance: $agreedPerformance
        performanceIndicator: $performanceIndicator
      }
    ) {
      id
      targetno
      targetname
      startdate
      enddate
      agreedPerformance
      performanceIndicator
    }
  }
`;

//Targets
export const useTargets = (userId) => {
  const { data, error, loading } = useQuery(LOAD_TARGETS, {
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

//Targets
export const useAppraisal = (userId) => {
  const { data, error, loading } = useQuery(LOAD_APPRAISALS, {
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

//Targets
export const useTarget = (targetId) => {
  const { data, error, loading } = useQuery(LOAD_TARGET, {
    variables: {
      targetId,
    },
  });
  return {
    data,
    error,
    loading,
  };
};

//Update Component Target
export const UPDATE_SELFSCORE = gql`
  mutation updateTarget(
    $targetId: ID!
    $selfScore: String!
    $achievedResult: String!
  ) {
    updateTarget(
      targetId: $targetId
      target: { selfScore: $selfScore, achievedResult: $achievedResult }
    ) {
      id
    }
  }
`;

//Update Component Target
export const UPDATE_SUPERVISORSCORE = gql`
  mutation updateTarget($targetId: ID!, $supervisorScore: String!) {
    updateTarget(
      targetId: $targetId
      target: { supervisorScore: $supervisorScore }
    ) {
      id
    }
  }
`;

//Update Component Target
export const UPDATE_JOINTSCORE = gql`
  mutation updateTarget($targetId: ID!, $jointScore: String!) {
    updateTarget(targetId: $targetId, target: { jointScore: $jointScore }) {
      id
    }
  }
`;

export const UPDATE_TARGET = gql`
  mutation updateTarget($targetId: ID!, $supervisorScore: String!) {
    updateTarget(
      targetId: $targetId
      target: { supervisorScore: $supervisorScore }
    ) {
      id
    }
  }
`;

export const DELETE_TARGET = gql`
  mutation deleteTarget($targetId: ID!) {
    deleteTarget(targetId: $targetId)
  }
`;
