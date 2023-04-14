import Head from "next/head";

export const HeaderTag = (props) => {
  return (
    <Head>
      <title>{"Portfolio" + " | " + props.page}</title>
      <link rel="shortcut icon" href="site_icon.png" type="image/x-icon" />
      <meta
        name="description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
      <link rel="apple-touch-icon" sizes="180x180" href="site_icon.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={"Portfolio" + " | " + props.page} />
      <meta property="og:description" content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content="画像の説明" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Portfolio" + " | " + props.page} />
      <meta name="twitter:description" content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"} />
    </Head>
  );
};
