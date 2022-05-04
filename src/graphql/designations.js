import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

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

//Add Component Designation
export const ADD_DESIGNATION = gql`
  mutation createDesignation(
    $designationno: String!
    $designationname: String!
    $designationdescription: String!
  ) {
    createDesignation(
      designationInput: {
        designationno: $designationno
        designationname: $designationname
        designationdescription: $designationdescription
      }
    ) {
      id
      designationno
      designationname
      designationdescription
      createdAt
    }
  }
`;

export const DELETE_DESIGNATION = gql`
  mutation deleteDesignation($designationId: ID!) {
    deleteDesignation(designationId: $designationId)
  }
`;
