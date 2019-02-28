import React from 'react';
import PropTypes from 'prop-types';
import { CounterContainer, CounterText } from './styles';

const Counter = ({ currentReview, totalReviews }) => (
  <CounterContainer>
    <CounterText id="current-review">{`${currentReview}/${totalReviews}`}</CounterText>
  </CounterContainer>
);

export default Counter;

Counter.displayName = 'Counter';

Counter.propTypes = {
  currentReview: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired
};
