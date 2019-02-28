import React from 'react';
import { shallow, mount } from 'enzyme';
import wait from 'waait';
import Controls from '../../../../components/Slider/Controls';

const mockPreviousFunction = jest.fn();
const mockNextFunction = jest.fn();

describe('Slider/Controls', () => {
  it('renders slider', () => {
    const component = shallow(
      <Controls previousReview={mockPreviousFunction} nextReview={mockNextFunction} />
    );
    expect(component).toMatchSnapshot();
  });

  it('calls mockNextFunction', async () => {
    const component = mount(
      <Controls previousReview={mockPreviousFunction} nextReview={mockNextFunction} />
    );

    await wait(0);
    component.update();

    const nextButton = component.find('div#next-button');
    nextButton.simulate('click');
    expect(mockNextFunction).toHaveBeenCalled();
  });

  it('calls mockPreviousFunction', async () => {
    const component = mount(
      <Controls previousReview={mockPreviousFunction} nextReview={mockNextFunction} />
    );

    await wait(0);
    component.update();

    const prevButton = component.find('div#prev-button');
    prevButton.simulate('click');
    expect(mockPreviousFunction).toHaveBeenCalled();
  });
});
