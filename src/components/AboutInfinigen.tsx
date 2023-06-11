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
              tellus orci ac auctor augue mauris augue neque gravida in
              fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
              tellu tellus orci ac auctor augue mauris augue neque gravida in
              fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
              tellu
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
