import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { changeRoute, loadData, actionTypes } from '../../store/actions';

class Index extends React.PureComponent {
  static async getInitialProps({ store }) {
    if (!store.getState().globalData) {
      store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
    }
    if (store.getState().activeRoute) {
      store.dispatch(changeRoute(store.getState().activeRoute));
    }
  }

  render() {
    return <Layout />;
  }
}

Index.displayName = 'Index';

export default connect()(Index);
