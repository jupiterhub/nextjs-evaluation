import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function JupiterStory() {
  return (
    <Layout>
      <Head>
        <title>Jupiter's Story</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("window.FB is populated, script loaded");
        }}
      />
      <div>
        <nav className={styles.nav}>
          <div className={styles.title}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </nav>
        <h1 className="text-9xl text-rose-700">Jupiter's story</h1>
        <Image
          src="/images/profile_photo.jpeg"
          width={200}
          height={200}
          alt="Jupiter"
        />
      </div>
    </Layout>
  );
}
