import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedStoriesData } from "../lib/stories";

const Home: NextPage = ({ allStoriesData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <nav className={styles.nav}>
          <div className={styles.title}>
            <ul>
              {allStoriesData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/stories/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <div className={styles.publishDate}>Published on: {date}</div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allStoriesData = await getSortedStoriesData();
  return {
    props: {
      allStoriesData,
    },
  };
}

export default Home;
