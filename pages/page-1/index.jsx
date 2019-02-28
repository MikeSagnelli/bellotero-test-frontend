import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import { loadData, actionTypes } from '../../store/actions';

class Page1 extends React.PureComponent {
  static async getInitialProps({ store, pathname }) {
    if (!store.getState().globalData) {
      store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
    }
    if (!store.getState().testimonialData) {
      store.dispatch(loadData(actionTypes.LOAD_TESTIMONIAL));
    }
    return { activeRoute: pathname.substring(1) };
  }

  render() {
    const { activeRoute } = this.props;
    return (
      <Layout activeRoute={activeRoute}>
        <Slider />
      </Layout>
    );
  }
}

Page1.displayName = 'Page1';

Page1.propTypes = {
  activeRoute: PropTypes.string
};

Page1.defaultProps = {
  activeRoute: 'page-1'
};

export default connect()(Page1);
