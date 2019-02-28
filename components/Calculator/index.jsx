import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  InnerContainer,
  ValuesContainer,
  LabelContainer,
  Label,
  Description
} from './styles';
import Title from './Title';
import Value from './Value';
import Input from './Input';

class Calculator extends React.PureComponent {
  state = {
    employees: '0',
    costs: '0'
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  estimateCostsSavings = () => {
    const { costs } = this.state;
    const cost = parseInt(costs, 10);
    const result = cost * 0.3;
    return parseFloat(result, 10).toFixed(2);
  };

  estimateAnnualSavings = () => {
    const { employees } = this.state;
    const nEmployees = parseInt(employees, 10);
    const estimatedCostSavings = this.estimateCostsSavings();
    const result = nEmployees * 1337 + estimatedCostSavings;
    return parseFloat(result, 10).toFixed(2);
  };

  render() {
    const { configuratorData } = this.props;
    const { employees, costs } = this.state;

    const motto = configuratorData.calculator.title.slice(0, 14);
    const companyName = configuratorData.calculator.title.slice(15);
    const estimatedCostSaving = this.estimateCostsSavings();
    const estimatedAnnualSaving = this.estimateAnnualSavings();

    return (
      <Container>
        <InnerContainer>
          <Title id="title-1" title={motto} />
          <Title id="title-2" title={companyName} />
          <Description id="description">{configuratorData.calculator.description}</Description>
        </InnerContainer>
        <InnerContainer>
          <Input
            id="costs"
            name="costs"
            value={costs}
            min="0"
            max="100"
            step="0.1"
            onChange={this.onChange}
            type="money"
            label="Monthly ingredient spending"
          />
          <Input
            id="employees"
            name="employees"
            value={employees}
            min="0"
            max="10"
            step="1"
            onChange={this.onChange}
            label="Full-time employees that process invoices"
          />
          <ValuesContainer>
            <Value id="cost" value={estimatedCostSaving} />
            <Value id="annual" value={estimatedAnnualSaving} />
          </ValuesContainer>
          <LabelContainer>
            <Label>Estimated cost food savings</Label>
            <Label>Your estimated annual savings</Label>
          </LabelContainer>
        </InnerContainer>
      </Container>
    );
  }
}

Calculator.displayName = 'Calculator';

Calculator.propTypes = {
  configuratorData: PropTypes.shape({
    calculator: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
};

Calculator.defaultProps = {
  configuratorData: null
};

export default connect(state => state)(Calculator);
