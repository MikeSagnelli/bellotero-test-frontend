import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import { loadData, actionTypes } from '../../store/actions';

const Page1 = ({ activeRoute }) => (
  <Layout activeRoute={activeRoute}>
    <Slider />
  </Layout>
);

Page1.getInitialProps = async ({ store, pathname }) => {
  await store.dispatch(loadData(actionTypes.LOAD_TESTIMONIAL));
  await store.dispatch(loadData(actionTypes.LOAD_CONFIGURATOR));
  await store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
  return { activeRoute: pathname.substring(1) };
};

Page1.displayName = 'Page1';

Page1.propTypes = {
  activeRoute: PropTypes.string
};

Page1.defaultProps = {
  activeRoute: 'page-1'
};

export default connect()(Page1);
