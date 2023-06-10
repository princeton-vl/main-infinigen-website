import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

// export default function Highlight({ children, color }) {
export default function Highlight({ children, filename, website }) {
  var path = require("@site/static/img/contributors/" + filename).default;
  //   return <img className={styles.contributor_image} src={path} />;

  return (
    <div class="card margin-top--sm">
      <a href={website}>
        <div class="card__header">
          <div class="avatar">
            <img class="avatar__photo" src={path} />
            <div class="avatar__intro">
              <div class="avatar__name">Alexander Raistrick</div>
              <small class="avatar__subtitle">
                Consultant, Speaker, Lead Engineer
              </small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
