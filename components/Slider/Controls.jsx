import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, RightArrow, SwitchersContainer, SwitchButton } from './styles';

const Counter = ({ previousReview, nextReview }) => (
  <SwitchersContainer>
    <SwitchButton id="prev-button" onClick={previousReview}>
      <Arrow src="/static/images/arrow.svg" alt="next" />
    </SwitchButton>
    <SwitchButton id="next-button" onClick={nextReview}>
      <RightArrow src="/static/images/arrow.svg" alt="next" />
    </SwitchButton>
  </SwitchersContainer>
);

Counter.displayName = 'Counter';

Counter.propTypes = {
  previousReview: PropTypes.func.isRequired,
  nextReview: PropTypes.func.isRequired
};

export default Counter;
