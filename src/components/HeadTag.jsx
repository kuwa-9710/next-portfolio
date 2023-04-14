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
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content="Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Portfolio" + " | " + props.page} />
      <meta
        name="twitter:description"
        content={"Tomoya Kuwashimaのポートフォリオの" + props.page + "pageです"}
      />
    </Head>
  );
};
