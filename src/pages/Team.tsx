import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Image } from "react-grid-gallery";
import ReactPaginate from "react-paginate";
import ContributorsList from "@site/src/components/Highlight";

export interface CustomImage extends Image {
  original: string;
}

export default function Team({ children }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Gallery`}
      description="Description will go into a meta tag in <head />"
    >
      <h1 style={{ textAlign: "center" }} className="margin-top--lg">
        Current
      </h1>
      <div className="row">
        <div className="col col--3"></div>
        <div className="col col--6">
          <ContributorsList
            shuffle={true}
            people={[
              {
                name: "Alexander Raistrick",
                description:
                  "Team coordination, developed the creature system, transpiler and scene composition.",
                filename: "raistrick.jpeg",
                website: "http://araistrick.com/",
              },
              {
                name: "Lahav Lipson",
                description:
                  "Trained models and implemented dense annotations and rendering.",
                filename: "lahav.jpeg",
                website: "https://www.lahavlipson.com/",
              },
              {
                name: "Zeyu Ma",
                description:
                  "Developed the terrain system and camera selection.",
                filename: "zeyu.png",
                website: "https://mazeyu.github.io/",
              },
            ]}
          ></ContributorsList>
        </div>
      </div>
    </Layout>
  );
}
