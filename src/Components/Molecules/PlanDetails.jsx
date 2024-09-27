import React from 'react';
import Icon from '../Atoms/Icon';
import Text from '../Atoms/Text';
import './PlanDetails.scss';
import Music from '../../assets/icon-music.svg'

const PlanDetails = () => (
  <div className="plan-details">
    <Icon src={Music} alt="Música" />
    <div className="plan-info">
      <Text variant="title">Anual Plan</Text>
      <Text>$59.99/year</Text>
    </div>
    <a href="/change" className="change-link">Change</a>
  </div>
);

export default PlanDetails;
