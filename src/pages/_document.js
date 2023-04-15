import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="shortcut icon" href="site_icon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="site_icon.png" />        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
