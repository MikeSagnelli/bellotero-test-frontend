import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadData, actionTypes } from '../../store/actions';

class Page2 extends React.PureComponent {
  static async getInitialProps({ store, pathname }) {
    if (!store.getState().globalData) {
      store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
    }
    if (!store.getState().testimonialData) {
      store.dispatch(loadData(actionTypes.LOAD_CONFIGURATOR));
    }
    return { activeRoute: pathname.substring(1) };
  }

  render() {
    const { activeRoute } = this.props;
    return <Layout activeRoute={activeRoute} />;
  }
}

Page2.displayName = 'Page2';

Page2.displayName = 'Page2';

Page2.propTypes = {
  activeRoute: PropTypes.string
};

Page2.defaultProps = {
  activeRoute: 'page-1'
};

export default connect()(Page2);
