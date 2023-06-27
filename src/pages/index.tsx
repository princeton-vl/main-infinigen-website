import React, { useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ImageGallery from "react-image-gallery";
import AboutInfinigen from "@site/src/components/AboutInfinigen";
import KeyFeaturesAndCapabilities from "@site/src/components/KeyFeaturesAndCapabilities";
import PaperInfo from "@site/src/components/PaperInfo";

import styles from "./index.module.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showThumbnails={true}
        infinite={true}
        showBullets={true}
        originalWidth={5000}
        lazyLoad={true}
      />
    );
  }
}

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
};

const InfinigenHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.youtube_outer}>
      <div className={styles.youtube_inner}>
        <iframe
          className={styles.iframe_youtube}
          src="https://www.youtube.com/embed/6tgspeI-GHY"
        ></iframe>
      </div>
    </div>
  );
};

const MainLink = (props) => {
  return (
    <div className={clsx("col col--2")}>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro"
          style={{ minWidth: "180px" }}
        >
          <div>
            <img src={"/" + props.svg_name} style={{ height: "50px" }} />
          </div>
          <div style={{ textAlign: "center" }}>{props.text}</div>
        </Link>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <InfinigenHeader />
        <AboutInfinigen />
        <PaperInfo />
        <KeyFeaturesAndCapabilities />
      </main>
    </Layout>
  );
}
