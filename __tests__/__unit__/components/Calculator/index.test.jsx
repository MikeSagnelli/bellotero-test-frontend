import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import wait from 'waait';
import Calculator from '../../../../components/Calculator';

const mockStore = configureStore();

const estimateCostsSavings = costs => {
  const cost = parseInt(costs, 10);
  const result = cost * 0.3;
  return parseFloat(result, 10).toFixed(2);
};

const estimateAnnualSavings = (employees, costs) => {
  const nEmployees = parseInt(employees, 10);
  const estimatedCostSavings = estimateCostsSavings(costs);
  const result = nEmployees * 1337 + estimatedCostSavings;
  return parseFloat(result, 10).toFixed(2);
};

const initialState = {
  configuratorData: {
    calculator: {
      title: 'Save more with Bellotero.io',
      description:
        'With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.'
    }
  }
};

describe('Calculator', () => {
  it('renders calculator', () => {
    const component = shallow(<Calculator />);
    expect(component).toMatchSnapshot();
  });

  it('renders title and description correctly', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Calculator />
      </Provider>
    );

    await wait(0);
    component.update();

    const title1 = component.find('h1#title-1').text();
    const title2 = component.find('h1#title-2').text();
    const description = component.find('p#description').text();
    expect(title1).toBe(initialState.configuratorData.calculator.title.slice(0, 14));
    expect(title2).toBe(initialState.configuratorData.calculator.title.slice(15));
    expect(description).toBe(initialState.configuratorData.calculator.description);

    component.unmount();
  });

  it('renders correct calculus when changing input range', async () => {
    const store = mockStore(initialState);
    const event1 = { target: { name: 'costs', value: '10' } };
    const event2 = { target: { name: 'employees', value: '2' } };

    const component = mount(
      <Provider store={store}>
        <Calculator />
      </Provider>
    );

    await wait(0);
    component.update();

    const range1 = component.find('input#costs');
    const range2 = component.find('input#employees');

    range1.simulate('change', event1);
    range2.simulate('change', event2);

    await wait(0);
    component.update();

    const cost = component.find('h1#cost').text();
    const annual = component.find('h1#annual').text();

    expect(cost).toBe(estimateCostsSavings('10'));
    expect(annual).toBe(estimateAnnualSavings('2', '10'));

    component.unmount();
  });
});
