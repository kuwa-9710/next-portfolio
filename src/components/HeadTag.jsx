import Head from "next/head";

export const HeaderTag = (props) => {
  return (
    <Head>
      <title>{"Portfolio" + " | " + props.page}</title>
      <meta
        name="description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
      <meta property="og:title" content={"Portfolio" + " | " + props.page} />
      <meta
        property="og:description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content="Portfolio" />
      <meta property="og:image" content="%PUBLIC_URL%/site_eyecatch.jpg" />
      <meta name="twitter:card" content="%PUBLIC_URL%/site_eyecatch.jpg" />
      <meta name="twitter:title" content={"Portfolio" + " | " + props.page} />
      <meta
        name="twitter:description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
    </Head>
  );
};
