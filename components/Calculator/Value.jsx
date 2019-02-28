import React from 'react';
import PropTypes from 'prop-types';
import { Dollar, Number, ValueContainer } from './styles';

const Value = ({ value, id }) => (
  <React.Fragment>
    <ValueContainer>
      <Dollar>$</Dollar>
      <Number id={id}>{value}</Number>
    </ValueContainer>
  </React.Fragment>
);

Value.displayName = 'Value';

Value.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Value;
