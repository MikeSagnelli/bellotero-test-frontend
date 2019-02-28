import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, SliderLabel, Unit, Money, RangeContainer, Range } from './styles';

class Input extends React.PureComponent {
  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  }

  render() {
    const { value, label, type, name, min, max, step, id } = this.props;
    return (
      <React.Fragment>
        <InputContainer>
          <SliderLabel>{label}</SliderLabel>
          {type === 'money' && <Money type="text" value={value} disabled />}
          {type !== 'money' && <Unit type="text" value={value} disabled />}
        </InputContainer>
        <RangeContainer>
          <Range
            type="range"
            id={id}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={e => this.handleChange(e)}
            name={name}
          />
        </RangeContainer>
      </React.Fragment>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string
};

Input.defaultProps = {
  type: ''
};

export default Input;
