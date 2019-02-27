import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../../components/Layout';

describe('Test Layout', () => {
  it('renders layout', () => {
    const component = shallow(<Layout />);
    expect(component).toMatchSnapshot();
  });
});
