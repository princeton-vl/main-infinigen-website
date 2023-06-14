import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";

const Capability = (props) => {
  return (
    <div className="item shadow--lw">
      <div className={clsx(styles.capability_outer)}>
        <div className="container">
          <div className={"row"}>
            <div className="col col--1" />
            <div className="col col--10">{props.children}</div>
          </div>
          <div className={"row"}>
            <div className="col col--1" />
            <div className="col col--10 margin-top--md">
              <h1>{props.header}</h1>
            </div>
          </div>
          <div className={"row"}>
            <div className="col col--1" />
            <div className="col col--10">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function KeyFeaturesAndCapabilities(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg")}>
      <div className={"container " + styles.stay_within_navbar}>
        <h1>Key Features & Capabilities</h1>
        <div className={"row"}>
          <div className="col-sm-6">
            <Capability
              header="Procedural"
              text={
                <p>
                  Infinigen generates all assets, including all shapes and materials, entirely from randomized mathematical rules, 
                  <span className={styles.infinigen_name}> Infinigen</span> does
                  not relying on external collections of assets. Users have full control the generation of assets by overriding default parameters for randomization. 
                </p>
              }
            >
              <img
                src={"img/procedural.png"}
                className={styles.capability_image}
              ></img>
            </Capability>
          </div>
          <div className="col-sm-6">
            <Capability
              header="Diverse"
              text={
                <p>
                  <span className={styles.infinigen_name}>Infinigen </span>
                  provides generators for diverse objects and scenes, currently focused on the natural world, including plants, animals, terrains, and natural phenomena such as fire, cloud, rain, and snow. 
                </p>
              }
            >
              <img
                src={"img/diverse.png"}
                className={styles.capability_image}
              ></img>
            </Capability>
          </div>
        </div>
        <div className={clsx("row")}>
          <div className="col-sm-6">
            <Capability
              header="Real Geometry"
              text={
                <p>
                  <span className={styles.infinigen_name}>Infinigen </span>
                  is optimized for computer vision research, particularly 3D vision.
                  <span className={styles.infinigen_name}>Infinigen</span>
                  does not use bump/normal-maps, full-transparency, or other
                  techniques which fake geometric detail. All fine details of geometry from <span className={styles.infinigen_name}>Infinigen</span> are real, ensuring accurate 3D ground truth. 
                </p>
              }
            >
              <div
                className={clsx(
                  "row",
                  "justify-content-md-center",
                  styles.real_vs_fake_imgs
                )}
              >
                <div className={clsx("col-sm-6", styles.real_fake_img_col)}>
                  <div>
                    <img src={"img/fake_geo.png"}></img>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    Art, Games & Movies:
                    <br />
                    <span
                      style={{
                        color: "red",
                        padding: "0.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      Fake Geometry
                    </span>
                  </div>
                </div>
                <div className={clsx("col-sm-6", styles.real_fake_img_col)}>
                  <div>
                    <img
                      src={"img/real_geo.png"}
                      className={styles.capability_image}
                    ></img>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <span className={styles.infinigen_name}>Infinigen</span>:{" "}
                    <br />
                    <span
                      style={{
                        color: "green",
                        padding: "0.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      Real Geometry
                    </span>
                  </div>
                </div>
              </div>
            </Capability>
          </div>

          <div className="col-sm-6">
            <Capability
              header="Automatic Annotations"
              text={
                <p>
                  <span className={styles.infinigen_name}>Infinigen </span>
                  can automatically generate high-quality annotations for a variety of computer vision
                  tasks, including optical flow, 3D scene flow, depth, surface
                  normals, panoptic segmentation, occlusion boundaries. Because users have full access to the rendering process, the annotations are easily customizable. 
                </p>
              }
            >
              <div className={clsx("row", styles.real_vs_fake_imgs)}>
                <div
                  className={clsx(
                    "col-sm-6",
                    "margin-top--sm",
                    styles.annotation_example_col
                  )}
                >
                  <div>
                    <img
                      style={{ border: "1px solid #1a1e13" }}
                      src={"img/depth_example.png"}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "col-sm-6",
                    "margin-top--sm",
                    styles.annotation_example_col
                  )}
                >
                  <div>
                    <img
                      style={{ border: "1px solid #1a1e13" }}
                      src={"img/surface_normal_example.png"}
                      className={styles.capability_image}
                    ></img>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "row",
                  "margin-top--md",
                  styles.real_vs_fake_imgs
                )}
              >
                <div
                  className={clsx(
                    "col-sm-6",
                    "margin-top--sm",
                    styles.annotation_example_col
                  )}
                >
                  <div>
                    <img
                      style={{ border: "1px solid #1a1e13" }}
                      src={"img/segmentation_example.png"}
                    ></img>
                  </div>
                </div>
                <div
                  className={clsx(
                    "col-sm-6",
                    "margin-top--sm",
                    styles.annotation_example_col
                  )}
                >
                  <div>
                    <img
                      style={{ border: "1px solid #1a1e13" }}
                      src={"img/flow_example.png"}
                      className={styles.capability_image}
                    ></img>
                  </div>
                </div>
              </div>
            </Capability>
          </div>
        </div>
      </div>
    </section>
  );
}
