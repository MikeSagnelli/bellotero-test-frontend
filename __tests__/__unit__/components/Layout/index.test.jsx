import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import wait from 'waait';
import Layout from '../../../../components/Layout';

const mockStore = configureStore();

const initialState = {
  globalData: {
    menu: {
      items: [
        {
          text: 'Example1',
          route: 'example-1'
        },
        {
          text: 'Example2',
          route: 'example-2'
        },
        {
          text: 'Example3',
          route: '#'
        },
        {
          text: 'Example4',
          route: '#'
        }
      ]
    }
  }
};

const nRouteLinks = 2;
const nonRouteLinks = 2;

describe('Layout', () => {
  it('renders layout', () => {
    const component = shallow(<Layout />);
    expect(component).toMatchSnapshot();
  });

  it('has n links that will route', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    await wait(0);
    component.update();

    const routes = component.find('a#route');
    expect(routes).toHaveLength(nRouteLinks);

    component.unmount();
  });

  it('has n links that will not route', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    await wait(0);
    component.update();

    const routes = component.find('a#no-route');
    expect(routes).toHaveLength(nonRouteLinks);

    component.unmount();
  });

  it('has an active link', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Layout activeRoute={initialState.globalData.menu.items[0].route} />
      </Provider>
    );

    await wait(0);
    component.update();

    const routes = component.find('div.active');
    expect(routes).toHaveLength(1);

    component.unmount();
  });
});
