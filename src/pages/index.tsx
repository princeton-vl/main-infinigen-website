import React, { useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import RowOfStuff from "@site/src/components/RowOfStuff";
import ImageGallery from "react-image-gallery";
import GTPreview from "../../src/components/GTPreview.tsx";

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
///<img src={bg_img} />
//style={{ backgroundImage: "/showcase_highres/0005.png" }}
const InfinigenHeader = () => {
  // const parallax = useRef<IParallax>(null!);
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner, styles.bg_img)}>
      <div className="container">
        <div>
          <img
            src="logos/infg_logo.svg"
            style={{ height: "250px" }}
            className="padding-bottom--lg"
          />
          {/* <h1 className={clsx("hero__title", styles.main_title)}>
            {siteConfig.title}
          </h1> */}
          {/* <p className={clsx("hero__subtitle", styles.main_taglinetitle)}>
            A Dataset Generator
          </p>
          <p className={clsx("hero__subtitle", styles.main_taglinetitle)}>
            Fully Procedural and Open-Source
          </p> */}
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started - 5min ⏱️
          </Link>
        </div>
        <div className="container">
          <div className={clsx("row", "margin-top--lg")}>
            <div className={clsx("col col--3")}></div>
            <MainLink text="Code" />
            <MainLink text="Paper" />
            <MainLink text="Downloads" />

            <div className={clsx("col col--3")}></div>
          </div>
        </div>
      </div>
    </header>
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
            <img src="/github-mark.png" style={{ height: "50px" }} />
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
      <InfinigenHeader />
      <main>
        <RowOfStuff />
        <MyGallery />
        <div class="container">
          <div class="row">
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
