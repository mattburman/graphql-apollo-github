import React from 'react';

import {
} from '../mutations';

import '../style.css';

const TeamItem = ({
  name,
  description,
}) => (
  <div>
    <div className="RepositoryItem-title">
      <h2>{name}</h2>
      <div>{description}</div>
    </div>
  </div>
);

export default TeamItem;
