import React from 'react';
import { Query } from 'react-apollo';

import { GET_TEAMS_OF_ORGANIZATION } from './queries';
import TeamList from '../Team';

import Loading from '../Loading';
import ErrorMessage from '../Error';

const Teams = ({ organizationName="hacksheffield" }) => (
  <Query
    query={GET_TEAMS_OF_ORGANIZATION}
    variables={{
      organizationName,
    }}
    skip={organizationName === ''}
    notifyOnNetworkStatusChange={true}
  >
    {({ data, loading, error, fetchMore }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }

      const { organization } = data;

      if (loading && !organization) {
        return <Loading isCenter={true} />;
      }

      return (
        <TeamList
          loading={loading}
          teams={organization.teams}
          fetchMore={fetchMore}
          entry={'organization'}
        />
      );
    }}
  </Query>
);

export default Teams;
