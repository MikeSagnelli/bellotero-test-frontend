import App, { Container } from 'next/app';
import React from 'react';
import Header from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore from '../store';
import GlobalStyle from './globalStyle';

class BelloteroApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Header>
          <title>Bellotero.io</title>
        </Header>
        <GlobalStyle />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

BelloteroApp.displayName = 'BelloteroApp';

export default withRedux(configureStore)(withReduxSaga(BelloteroApp));
