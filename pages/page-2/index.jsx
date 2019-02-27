import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadData, actionTypes } from '../../store/actions';

class Index extends React.PureComponent {
  static async getInitialProps({ store, pathname }) {
    if (!store.getState().globalData) {
      store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
    }
    return { activeRoute: pathname.substring(1) };
  }

  render() {
    const { activeRoute } = this.props;
    return <Layout activeRoute={activeRoute} />;
  }
}

Index.displayName = 'Index';

export default connect()(Index);
