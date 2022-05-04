import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_JOBGROUPS = gql`
  query getJobgroups {
    getJobGroups {
      id
      jobgroupname
    }
  }
`;

export const DELETE_JOBGROUP = gql`
  mutation deleteJobgroup($jobgroupId: ID!) {
    deleteJobgroup(jobgroupId: $jobgroupId)
  }
`;
