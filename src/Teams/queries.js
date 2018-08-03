import gql from 'graphql-tag';

import { TEAM_FRAGMENT } from '../Team';

export const GET_TEAMS_OF_ORGANIZATION = gql`
  query($organizationName: String!, $cursor: String) {
    organization(login: $organizationName) {
      teams (first: 5, after: $cursor) {
        edges {
          node {
            ...team
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }

  ${TEAM_FRAGMENT}
`;
