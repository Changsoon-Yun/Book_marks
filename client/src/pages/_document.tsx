import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
