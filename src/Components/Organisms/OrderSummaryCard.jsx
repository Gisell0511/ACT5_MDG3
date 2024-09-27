import React from 'react';
import PlanDetails from '../Molecules/PlanDetails';
import Button from '../Atoms/Button';
import Text from '../Atoms/Text';
import Hero from '../../assets/illustration-hero.svg'
import './OrderSummaryCard.scss';

const OrderSummaryCard = () => (
    <div className="order-summary-container">
    <div className="order-summary-card">
      <div className="order-image">
        <img src={Hero} alt="Ilustración" />
      </div>
      <div className="order-content">
        <Text variant="title">Order Summary</Text>
        <Text>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Text>
        <PlanDetails />
        <Button primary>Proceed to payment</Button>
        <Button>Cancel Order</Button>
      </div>
    </div>
  </div>
);

export default OrderSummaryCard;
