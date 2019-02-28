import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { loadData, actionTypes } from '../../store/actions';
import Calculator from '../../components/Calculator';

const Page2 = ({ activeRoute }) => (
  <Layout activeRoute={activeRoute}>
    <Calculator />
  </Layout>
);

Page2.getInitialProps = async ({ store, pathname }) => {
  await store.dispatch(loadData(actionTypes.LOAD_TESTIMONIAL));
  await store.dispatch(loadData(actionTypes.LOAD_CONFIGURATOR));
  await store.dispatch(loadData(actionTypes.LOAD_GLOBAL));
  return { activeRoute: pathname.substring(1) };
};

Page2.displayName = 'Page2';

Page2.displayName = 'Page2';

Page2.propTypes = {
  activeRoute: PropTypes.string
};

Page2.defaultProps = {
  activeRoute: 'page-1'
};

export default connect()(Page2);
