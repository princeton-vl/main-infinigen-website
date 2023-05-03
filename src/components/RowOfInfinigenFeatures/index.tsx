import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

let BASE_PATH = "https://infinigen.cs.princeton.edu/";

const FeatureOfInfinigen = (props) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={BASE_PATH + props.path} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default function RowOfInfinigenFeatures(): JSX.Element {
  return (
    <section className={clsx(styles.features, "margin-top--lg")}>
      <div className="container">
        <div className="row">
          <FeatureOfInfinigen
            path="front_page_images/plants.png"
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureOfInfinigen
            path="front_page_images/plants.png"
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureOfInfinigen
            path="front_page_images/plants.png"
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
}
