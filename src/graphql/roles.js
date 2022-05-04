import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_ROLES = gql`
  query getRoles {
    getRoles {
      id
      rolesname
    }
  }
`;

export const DELETE_ROLE = gql`
  mutation deleteRole($roleId: ID!) {
    deleteRole(roleId: $roleId)
  }
`;
