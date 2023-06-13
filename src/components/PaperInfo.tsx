import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
// import { FaBeer, IoIosPaper } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import * as aiicons from "react-icons/ai";

export default function PaperInfo(): JSX.Element {
  const bibtex =
    "\
  Bibtex will need to be put \n\
  in this text box \n\
  conference on cv and pattern recog 2023";
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={"container " + styles.stay_within_navbar}>
        {/* <h1 className="hero__title">Paper</h1> */}
        <div className={"row"}>
          <div className="col col--12" style={{ textAlign: "center" }}>
            <h1 className="hero__title">
              Infinite Photorealistic Worlds using Procedural Generation
            </h1>
          </div>
        </div>
        <div className={"row"}>
          <div className={clsx("col col--12", styles.author_list)}>
            <span>
              <a href="https://www.google.com">Alexander Raistrick</a>,
            </span>
          </div>
        </div>
        <div className={"row"}>
          <div
            className={clsx(
              "col col--12",
              "margin-vert--sm",
              styles.author_list
            )}
          >
            <span>
              Conference on Computer Vision and Pattern Recognition (CVPR) 2023
            </span>
          </div>
        </div>
        <div className={"row"}>
          <div
            className={clsx(
              "col col--12",
              "margin-vert--sm",
              styles.author_list
            )}
          >
            <a
              className={clsx("button button--info", styles.read_the_paper)}
              href="https://www.google.com"
            >
              <img src="img/paper.svg" className={styles.icon} />
              Read the paper
            </a>
          </div>
        </div>
        <pre>
          <code>{bibtex}</code>
        </pre>
      </div>
    </section>
  );
}

/*

                    <span
                      style={{
                        borderRadius: "2px",
                        color: "red",
                        padding: "0.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      Fake Geometry
                    </span>
*/
