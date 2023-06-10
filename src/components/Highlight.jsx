import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

export default function Contributor({
  children,
  name,
  filename,
  website,
  description,
}) {
  var path = require("@site/static/img/contributors/" + filename).default;

  return (
    <div class="card margin-top--sm">
      <a href={website}>
        <div class="card__header">
          <div class="avatar">
            <img class="avatar__photo" src={path} />
            <div class="avatar__intro">
              <div class="avatar__name">{name}</div>
              <small class="avatar__subtitle">{description}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
