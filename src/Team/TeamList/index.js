import React, { Fragment } from 'react';

import TeamItem from '../TeamItem';

import FetchMore from '../../FetchMore';

import '../style.css';

const getUpdateQuery = entry => (
  previousResult,
  { fetchMoreResult },
) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    [entry]: {
      ...previousResult[entry],
      teams: {
        ...previousResult[entry].teams,
        ...fetchMoreResult[entry].teams,
        edges: [
          ...previousResult[entry].teams.edges,
          ...fetchMoreResult[entry].teams.edges,
        ],
      },
    },
  };
};

const TeamList = ({
  entry,
  teams,
  loading,
  fetchMore,
}) => (
  <Fragment>
    {teams.edges.map(({ node }) => (
      <div key={node.id} className="TeamItem">
        <TeamItem {...node} />
      </div>
    ))}

    <FetchMore
      loading={loading}
      hasNextPage={teams.pageInfo.hasNextPage}
      variables={{
        cursor: teams.pageInfo.endCursor,
      }}
      updateQuery={getUpdateQuery(entry)}
      fetchMore={fetchMore}
    >
      Teams
    </FetchMore>
  </Fragment>
);

export default TeamList;
