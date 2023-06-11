import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

const Capability = () => {
  return (
    <div className={clsx(styles.capability_outer, "padding-left--lg")}>
      <div className={"row"}>
        <div className="col col--5">
          <img
            src={"placeholder.png"}
            className={styles.capability_image}
          ></img>
        </div>
      </div>
      <div className={"row"}>
        <div className="col col--12 margin-top--md">
          <h1>Lorem Ipsum</h1>
        </div>
      </div>
      <div className={"row"}>
        <div className="col col--12">
          <p>
            tellus orci ac auctor augue mauris augue neque gravida in fermentum
            et sollicitudin ac orci phasellus egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum odio
          </p>
        </div>
      </div>
    </div>
  );
};

export default function KeyFeaturesAndCapabilities(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={"container " + styles.stay_within_navbar}>
        <h1 className="hero__title">Key Features & Capabilities</h1>
        <div className={"row"}>
          <div className="col col--6">
            <Capability />
          </div>
          <div className="col col--6">
            <Capability />
          </div>
        </div>
        <div className={clsx("row")}>
          <div className="col col--6">
            <Capability />
          </div>
          <div className="col col--6">
            <Capability />
          </div>
        </div>
      </div>
    </section>
  );
}
