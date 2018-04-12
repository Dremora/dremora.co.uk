import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

import global from '../styles/global';

injectGlobal`${global}`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Lato:700,900" rel="stylesheet" />
          {styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
