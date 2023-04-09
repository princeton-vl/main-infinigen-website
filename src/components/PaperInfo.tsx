import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
// import { FaBeer, IoIosPaper } from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import * as aiicons from "react-icons/ai";

export default function PaperInfo(): JSX.Element {
  const bibtex_nature =
    "\
@inproceedings{infinigen2023infinite,\n\
  title={Infinite Photorealistic Worlds Using Procedural Generation},\n\
  author={Raistrick, Alexander and Lipson, Lahav and Ma, Zeyu and Mei, Lingjie and Wang, Mingzhe and Zuo, Yiming and Kayan, Karhan and Wen, Hongyu and Han, Beining and Wang, Yihan and Newell, Alejandro and Law, Hei and Goyal, Ankit and Yang, Kaiyu and Deng, Jia},\n\
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n\
  pages={12630--12641},\n\
  year={2023}\n\
}";
  const bibtex_indoors =
    "\
@inproceedings{infinigen2024indoors,\n\
    author={Raistrick, Alexander and Mei, Lingjie and Kayan, Karhan and Yan, David and Zuo, Yiming and Han, Beining and Wen, Hongyu and Parakh, Meenal and Alexandropoulos, Stamatis and Lipson, Lahav and Ma, Zeyu and Deng, Jia},\n\
    title={Infinigen Indoors: Photorealistic Indoor Scenes using Procedural Generation},\n\
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n\
    month={June},\n\
    year={2024},\n\
    pages={21783-21794}\n\
}";
  const bibtex_sim =
  "\
@misc{joshi2025proceduralgenerationarticulatedsimulationready,\n\
      title={Procedural Generation of Articulated Simulation-Ready Assets},\n\
      author={Abhishek Joshi and Beining Han and Jack Nugent and Max Gonzalez Saez-Diez and Yiming Zuo and Jonathan Liu and Hongyu Wen and Stamatis Alexandropoulos and Karhan Kayan and Anna Calveri and Tao Sun and Gaowen Liu and Yi Shao and Alexander Raistrick and Jia Deng},\n\
      year={2025},\n\
      eprint={2505.10755},\n\
      archivePrefix={arXiv},\n\
      primaryClass={cs.RO},\n\
      url={https://arxiv.org/abs/2505.10755},\n\
}";
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={"container " + styles.stay_within_navbar}>
        {/* <h1 className="hero__title">Paper</h1> */}
        <div className={"row"}>
          <div className="col col--12">
            <h1>Research Papers</h1>
          </div>
        </div>
        <div className={"row"}>
          <div className="col col--6">
            <h1 className={styles.paper_header} style={{ textAlign: "center" }}>
              <b>Infinite Photorealistic Worlds using Procedural Generation</b>
            </h1>
            <div className={"row"}>
              <div className={clsx("col col--12", styles.author_list)}>
                <span>
                  <a href="http://araistrick.com">Alexander Raistrick*</a>,{" "}
                  <a href="https://www.lahavlipson.com">Lahav Lipson*</a>,{" "}
                  <a href="https://mazeyu.github.io">Zeyu Ma*</a> &nbsp;
                  {/* <br /> */}
                  <a href="https://www.cs.princeton.edu/~lm5483/">
                    Lingjie Mei
                  </a>
                  ,{" "}
                  <a href="https://www.cs.princeton.edu/~mingzhew">
                    Mingzhe Wang
                  </a>
                  , <a href="https://zuoym15.github.io">Yiming Zuo</a>,{" "}
                  <a href="https://kkayan.com">Karhan Kayan</a>,{" "}
                  <a href="https://hermera.github.io">Hongyu Wen</a>,{" "}
                  <a href="https://pvl.cs.princeton.edu/people.html">
                    Beining Han
                  </a>
                  {/* , <br /> */}
                  <a href="https://pvl.cs.princeton.edu/people.html">
                    Yihan Wang
                  </a>
                  ,
                  <a href="http://www-personal.umich.edu/~alnewell/index.html">
                    Alejandro Newell
                  </a>
                  , <a href="https://heilaw.github.io">Hei Law</a>,{" "}
                  <a href="https://imankgoyal.github.io">Ankit Goyal</a>,{" "}
                  <a href="https://yangky11.github.io">Kaiyu Yang</a>,{" "}
                  <a href="http://www.cs.princeton.edu/~jiadeng">Jia Deng</a>
                  <br />( *equal contribution, alphabetical order )
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
                  Conference on Computer Vision and Pattern Recognition (CVPR)
                  2023
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
              <code>{bibtex_nature}</code>
            </pre>
          </div>


          <div className="col col--6">
            <h1 className={styles.paper_header} style={{ textAlign: "center" }}>
              <b>
                Infinigen Indoors: Photorealistic Indoor Scenes using Procedural
                Generation
              </b>
            </h1>
            <div className={"row"}>
              <div className={clsx("col col--12", styles.author_list)}>
                <span>
                  <a href="http://araistrick.com">Alexander Raistrick*</a>,{" "}
                  <a href="https://www.cs.princeton.edu/~lm5483/name.html">
                    Lingjie Mei*
                  </a>
                  , <a href="https://pvl.cs.princeton.edu/people.html">Karhan Kayan*</a>,{" "}
                  <a href="https://david-yan1.github.io/">David Yan</a>,
                  <a href="https://zuoym15.github.io">Yiming Zuo</a>,{" "}
                  <a href="https://pvl.cs.princeton.edu/people.html">
                    Beining Han
                  </a>
                  , <a href="https://hermera.github.io">Hongyu Wen</a>,{" "}
                  <a href="https://pvl.cs.princeton.edu/people.html">
                    Meenal Parakh
                  </a>
                  ,{" "}
                  <a href="https://stamatisalex.github.io/">
                    Stamatis Alexandropoulos
                  </a>
                  , <a href="https://www.lahavlipson.com">Lahav Lipson</a>,{" "}
                  <a href="https://mazeyu.github.io">Zeyu Ma</a>,{" "}
                  <a href="http://www.cs.princeton.edu/~jiadeng">Jia Deng</a>
                  <br />( *equal contribution, random order )
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
                  Conference on Computer Vision and Pattern Recognition (CVPR)
                  2024
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
                  href="https://arxiv.org/abs/2406.11824"
                >
                  <img src="img/paper.svg" className={styles.icon} />
                  Read the paper
                </a>
              </div>
            </div>
            <pre>
              <code>{bibtex_indoors}</code>
            </pre>
          </div>

          <div className="col col--6">
            <h1 className={styles.paper_header} style={{ textAlign: "center" }}>
              <b>
                Infinigen Articulated: Procedural Generation of Articulated Simulation-Ready Assets
              </b>
            </h1>
            <div className={"row"}>
              <div className={clsx("col col--12", styles.author_list)}>
                <span>
                  <a href="https://abhihjoshi.github.io/"> Abhishek Joshi</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Beining Han</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Jack Nugent</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Max Gonzalez Saez-Diez</a>, {" "},
                  <a href="https://zuoym15.github.io">Yiming Zuo</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Jonathan Liu</a>, {" "},
                  <a href="https://hermera.github.io">Hongyu Wen</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Stamatis Alexandropoulos</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Karhan Kayan</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Anna Calveri</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Tao Sun</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Gaowen Liu</a>, {" "},
                  <a href="https://pvl.cs.princeton.edu/people.html">Yi Shao</a>, {" "},
                  <a href="http://araistrick.com">Alexander Raistrick*</a>, {" "},
                  <a href="http://www.cs.princeton.edu/~jiadeng">Jia Deng</a> {" "},
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
                  Conference on Computer Vision and Pattern Recognition (CVPR)
                  2024
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
                  href="https://arxiv.org/abs/2505.10755"
                >
                  <img src="img/paper.svg" className={styles.icon} />
                  Read the paper
                </a>
              </div>
            </div>
            <pre>
              <code>{bibtex_sim}</code>
            </pre>
          </div>
          
        </div>
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
