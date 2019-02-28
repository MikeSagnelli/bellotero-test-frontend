import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../../../components/Layout/Logo';

describe('Logo', () => {
  it('renders logo', () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
