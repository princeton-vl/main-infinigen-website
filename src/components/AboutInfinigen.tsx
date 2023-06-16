import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

const ListItem = () => {
  return (
    <li className={styles.list_item}>
      tellus orci ac auctor augue mauris augue neque gravida in fermentum et
      sollicitudin
    </li>
  );
};

export default function AboutInfinigen(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={styles.stay_within_navbar + " container"}>
        <div className="row">
          <div className={clsx("col col--7", styles.about_infinigen_left)}>
            <img
              src={"img/random_sample.jpeg"}
              className={clsx(
                styles.about_infinigen_img
                // styles.vertical_center
              )}
            ></img>
          </div>
          <div className={clsx("col col--5")}>
            <h1>
              About <span className={styles.infinigen_name}>Infinigen</span>
            </h1>
            <p>
              Infinigen is a procedural generator of 3D scenes, developed by{" "}
              <a href="https://pvl.cs.princeton.edu/">
                Princeton Vision & Learning Lab
              </a>
              . Infinigen is optimized for computer vision research and
              generates diverse high-quality 3D training data. Infinigen is
              based on <a href="https://blender.org">Blender</a> and is free and
              open-source (GPL licensed). Infinigen is being actively developed
              to expand its capabilities and coverage.
            </p>
            <a
              class="twitter-timeline"
              data-height="180"
              href="https://twitter.com/PrincetonVL"
            >
              Tweets from PrincetonVL
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
}
