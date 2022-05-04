import { gql } from "@apollo/client";

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

export const DELETE_APPRAISAL_REVIEW_MEETING = gql`
  mutation deleteAppraisalReviewMeeting($appraisalreviewmeetingId: ID!) {
    deleteAppraisalReviewMeeting(
      appraisalreviewmeetingId: $appraisalreviewmeetingId
    )
  }
`;
