import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <nav className={styles.nav}>
          <div className={styles.title}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.title}>
            <Link href="/stories/jupiter">
              <a>Stories</a>
            </Link>
          </div>
        </nav>
        <main>
          <h2>Welcome to Pipu</h2>
        </main>
      </section>
    </Layout>
  );
};

export default Home;
