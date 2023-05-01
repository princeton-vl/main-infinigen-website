import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureOfInfinigen = () => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src="https://infinigen.cs.princeton.edu/placeholder.png" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{"title"}</h3>
        <p>{"description"}</p>
      </div>
    </div>
  );
};

export default function RowOfStuff(): JSX.Element {
  return (
    <section className={clsx(styles.features, "margin-top--lg")}>
      <div className="container">
        <div className="row">
          <FeatureOfInfinigen />
          <FeatureOfInfinigen />
          <FeatureOfInfinigen />
        </div>
      </div>
    </section>
  );
}
