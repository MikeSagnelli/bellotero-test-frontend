import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class BDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html lang="en">
        <Head>
          {styleTags}
          <meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
          <link rel="icon" href="/static/images/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:600i"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

BDocument.displayName = 'BDocument';

export default BDocument;
