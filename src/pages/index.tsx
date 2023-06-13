import React, { useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import RowOfInfinigenFeatures from "@site/src/components/RowOfInfinigenFeatures";
import ImageGallery from "react-image-gallery";
import GTPreview from "../../src/components/GTPreview.tsx";
import YouTube, { YouTubeProps } from "react-youtube";
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

function Example() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className={styles.youtube_example}
      videoId="2g811Eo7K8U"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}

const InfinigenHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.youtube_outer}>
      <div className={styles.youtube_inner}>
        <iframe
          className={styles.iframe_youtube}
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <InfinigenHeader />
        <AboutInfinigen />
        <KeyFeaturesAndCapabilities />
        <PaperInfo />
        <RowOfInfinigenFeatures />
        <MyGallery />

        <RowOfInfinigenFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--0" />
            <div className="col col--12">
              <GTPreview />
            </div>

            <div className="col col--0" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
