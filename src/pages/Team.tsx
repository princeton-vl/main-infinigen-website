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
          <ContributorsList
            shuffle={false}
            people={[
              {
                name: "Lingjie Mei",
                description:
                  "Created coral, sea invertebrates, small plants, boulders & moss.",
                filename: "lingjie.jpeg",
                website: "https://www.cs.princeton.edu/~lm5483/",
              },
              {
                name: "Mingzhe Wang",
                description:
                  "Developed materials for creatures, plants and terrain.",
                filename: "mingzhe.jpg",
                website: "https://www.cs.princeton.edu/~mingzhew/",
              },
              {
                name: "Yiming Zuo",
                description: "Developed trees and leaves.",
                filename: "zuo.png",
                website: "https://zuoym15.github.io/",
              },
              {
                name: "Karhan Kayan",
                description: "Created liquids and fire.",
                filename: "karhan.jpeg",
                website: "https://kkayan.com/",
              },
              {
                name: "Hongyu Wen",
                description: "Creature parts and materials.",
                filename: "hongyu.jpeg",
                website: "https://hermera.github.io/",
              },
              {
                name: "Yihan Wang",
                description:
                  "Creature parts and materials, and object annotations.",
                filename: "raistrick.jpeg",
                website: "https://pvl.cs.princeton.edu/people.html",
              },
              {
                name: "Beining Han",
                description: "Created ferns and small plants.",
                filename: "beining.jpeg",
                website: "https://pvl.cs.princeton.edu/people.html",
              },
              {
                name: "David Yan",
                description:
                  "Developed utlities for exporting data and running the system.",
                filename: "davidyan.jpeg",
                website: "https://www.linkedin.com/in/david-yan-726033215",
              },
              {
                name: "Jia Deng",
                description:
                  "Conceptualized the project, led the team, and set the directions.",
                filename: "jiadeng.jpg",
                website: "http://www.cs.princeton.edu/~jiadeng/",
              },
            ]}
          ></ContributorsList>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className="margin-top--lg">
        Past
      </h1>
      <div className="row margin-bottom--lg">
        <div className="col col--3"></div>
        <div className="col col--6">
          <ContributorsList
            shuffle={false}
            people={[
              {
                name: "Alejandro Newell",
                description: "Designed the tree & bush system.",
                filename: "alejandro.jpg",
                website: "http://www-personal.umich.edu/~alnewell/index.html",
              },
              {
                name: "Hei Law",
                description: "Created weather and clouds.",
                filename: "heilaw.jpg",
                website: "https://heilaw.github.io/",
              },
              {
                name: "Ankit Goyal",
                description: "Developed terrain materials.",
                filename: "ankit.png",
                website: "https://imankgoyal.github.io/",
              },
              {
                name: "Kaiyu Yang",
                description:
                  "Developed an initial prototype with randomized shapes.",
                filename: "kaiyu.jpg",
                website: "https://yangky11.github.io/",
              },
            ]}
          ></ContributorsList>
        </div>
      </div>
    </Layout>
  );
}
