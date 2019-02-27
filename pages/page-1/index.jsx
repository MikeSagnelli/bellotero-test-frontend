import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadData, actionTypes } from '../../store/actions';

class Index extends React.PureComponent {
  static async getInitialProps({ store }) {
    if (!store.getState().globalData) {
      store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
    }
  }

  render() {
    return <Layout activeRoute={0} />;
  }
}

Index.displayName = 'Index';

export default connect()(Index);
