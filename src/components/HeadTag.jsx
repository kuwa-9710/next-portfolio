import Head from "next/head";

export const HeaderTag = (props) => {
  return (
    <Head>
      <title>{"Portfolio" +" | " + props.page}</title>
      <link rel="shortcut icon" href="site_icon.png" type="image/x-icon" />
      <meta
        name="description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/site_icon.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <meta name="keywords" content="キーワード1, キーワード2, キーワード3" /> */}
      {/* <meta name="author" content="著者名" /> */}
      {/* <link rel="canonical" href="https://example.com/page" /> */}
      <meta property="og:title" content="ページタイトル" />
      <meta property="og:description" content="ページの説明" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://example.com/page" /> */}
      {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
      <meta property="og:image:alt" content="画像の説明" />
      <meta name="twitter:card" content="summary_large_image" />      
      <meta name="twitter:title" content="ページタイトル" />
      <meta name="twitter:description" content="ページの説明" />
      {/* <meta name="twitter:image" content="https://example.com/image.jpg" /> */}
    </Head>
  );
};
