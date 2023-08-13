import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const CustomDocument: FC = () => (
  <Html lang="en">
    <Head></Head>
    <body style={{ backgroundColor: 'white' }}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
