import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";
import { getAllStoryIds, getStoryData } from "../../lib/stories";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Story({ storyData }: any) {
  return (
    <Layout home={false}>
      <Head>
        <title>{storyData.title}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>{storyData.title}</h1>

      <div className={utilStyles.lightText}>
        <Date dateString={storyData.date} />
      </div>

      {storyData.path === "jupiter" && (
        <Image
          src="/images/profile_photo.jpeg"
          width={200}
          height={200}
          alt="Jupiter"
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: storyData.contentHtml }}></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllStoryIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const storyData = await getStoryData(params.id);

  return {
    props: {
      storyData,
    },
  };
}
