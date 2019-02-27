import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../../../components/HelloWorld';

describe('Test Hello World', () => {
  it('renders hello world header', () => {
    const component = shallow(<HelloWorld />);
    expect(component).toMatchSnapshot();
  });
});
