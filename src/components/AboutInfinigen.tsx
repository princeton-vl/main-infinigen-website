import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

const ListItem = () => {
  return (
    <li className={styles.list_item}>
      Compilation of deep learning models into minimum deployable modules.
    </li>
  );
};

export default function AboutInfinigen(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg")}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--7", styles.about_infinigen_left)}>
            <img
              src={"placeholder.png"}
              className={clsx(
                styles.about_infinigen_img
                // styles.vertical_center
              )}
            ></img>
          </div>
          <div className={clsx("col col--5")}>
            <h1>About Infinigen</h1>
            <p>
              The vision of the Apache TVM Project is to host a diverse
              community of experts and practitioners in machine learning,
              compilers, and systems architecture to build an accessible,
              extensible, and automated open-source framework that optimizes
              current and emerging machine learning models for any hardware
              platform. TVM provides the following main features:
            </p>
            <ul>
              <ListItem />
              <ListItem />
              <ListItem />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
