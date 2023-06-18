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
  author={Raistrick, Alexander and Lipson, Lahav and Ma, Zeyu and Mei, Lingjie and Wang, Mingzhe and Zuo, Yiming and Kayan, Karhan and Wen, Hongyu and Han, Beining and Wang, Yihan and Newell, Alejandro and Law, Hei and Goyal, Ankit and Yang, Kaiyu and Deng, Jia},\n\
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
              <a href="http://araistrick.com">Alexander Raistrick*</a>,{" "}
              <a href="https://www.lahavlipson.com">Lahav Lipson*</a>,{" "}
              <a href="https://mazeyu.github.io">Zeyu Ma*</a> ( * equal
              contribution, alphabetical order )
              <br />
              <a href="https://www.cs.princeton.edu/~lm5483/">
                Lingjie Mei
              </a>,{" "}
              <a href="https://www.cs.princeton.edu/~mingzhew">Mingzhe Wang</a>,{" "}
              <a href="https://zuoym15.github.io">Yiming Zuo</a>,{" "}
              <a href="https://kkayan.com">Karhan Kayan</a>,{" "}
              <a href="https://hermera.github.io">Hongyu Wen</a>,{" "}
              <a href="https://pvl.cs.princeton.edu/people.html">Beining Han</a>
              , <br />
              <a href="https://pvl.cs.princeton.edu/people.html">Yihan Wang</a>,
              <a href="http://www-personal.umich.edu/~alnewell/index.html">
                Alejandro Newell
              </a>
              , <a href="https://heilaw.github.io">Hei Law</a>,{" "}
              <a href="https://imankgoyal.github.io">Ankit Goyal</a>,{" "}
              <a href="https://yangky11.github.io">Kaiyu Yang</a>,{" "}
              <a href="http://www.cs.princeton.edu/~jiadeng">Jia Deng</a>
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
              href="http://arxiv.org/abs/2306.09310"
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
