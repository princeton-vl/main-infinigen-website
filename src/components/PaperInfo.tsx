import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
// import { FaBeer, IoIosPaper } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import * as aiicons from "react-icons/ai";

export default function PaperInfo(): JSX.Element {
  const bibtex =
    "\
@inproceedings{raistrick2023infinite,\n\
  title={Infinite Photorealistic Worlds Using Procedural Generation},\n\
  author={Raistrick, Alexander and Lipson, Lahav and Ma, Zeyu and Mei, Lingjie and Wang, Mingzhe and Zuo, Yiming and Kayan, Karhan and Wen, Hongyu and Han, Beining and Wang, Yihan and others},\n\
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n\
  pages={12630--12641},\n\
  year={2023}\n\
}";
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={"container " + styles.stay_within_navbar}>
        {/* <h1 className="hero__title">Paper</h1> */}
        <div className={"row"}>
          <div className="col col--12">
            <h1>Research Paper</h1>
            <h1 className={styles.paper_header} style={{ textAlign: "center" }}>
              <b>Infinite Photorealistic Worlds using Procedural Generation</b>
            </h1>
          </div>
        </div>
        <div className={"row"}>
          <div className={clsx("col col--12", styles.author_list)}>
            <span>
              <a href="https://www.google.com">Alexander Raistrick*</a>,{" "}
              <a href="https://www.google.com">Lahav Lipson*</a>,{" "}
              <a href="https://www.google.com">Zeyu Ma*</a> ( * equal
              contribution, alphabetical order )
              <br />
              <a href="https://www.google.com">Lingjie Mei</a>,{" "}
              <a href="https://www.google.com">Mingzhe Wang</a>,{" "}
              <a href="https://www.google.com">Yiming Zuo</a>,{" "}
              <a href="https://www.google.com">Karhan Kayan</a>,{" "}
              <a href="https://www.google.com">Hongyu Wen</a>,{" "}
              <a href="https://www.google.com">Beining Han</a>, <br />
              <a href="https://www.google.com">Yihan Wang</a>,
              <a href="https://www.google.com">Alejandro Newell</a>,{" "}
              <a href="https://www.google.com">Hei Law</a>,{" "}
              <a href="https://www.google.com">Ankit Goyal</a>,{" "}
              <a href="https://www.google.com">Kaiyu Yang</a>,{" "}
              <a href="https://www.google.com">Jia Deng</a>
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
