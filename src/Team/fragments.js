import gql from 'graphql-tag';

const TEAM_FRAGMENT = gql`
  fragment team on Team {
    name
    description
  }
`;

export default TEAM_FRAGMENT;
