import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const LOAD_APPRAISAL_REVIEW_MEETING = gql`
  query getAppraisalReviewMeeting {
    getAppraisalReviewMeetings {
      id
      meetingno
      meetingdate
      meetingtitle
      memberspresent
      meetingnotes
      createdAt
      username
    }
  }
`;

//Add Component Project
export const ADD_APPRAISAL_REVIEW_MEEETING = gql`
  mutation createAppraisalReviewMeeting(
    $meetingno: String!
    $meetingdate: String!
    $meetingtitle: String!
    $memberspresent: String!
    $meetingnotes: String!
  ) {
    createAppraisalreviewMeeting(
      CreateAppraisalreviewMeetingInput: {
        meetingno: $meetingno
        meetingdate: $meetingdate
        meetingtitle: $meetingtitle
        memberspresent: $memberspresent
        meetingnotes: $meetingnotes
      }
    ) {
      id
      meetingno
      meetingdate
      meetingtitle
      memberspresent
      meetingnotes
      createdAt
    }
  }
`;
