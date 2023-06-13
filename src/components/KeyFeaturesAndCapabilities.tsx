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
                  All assets, including the terrain, fauna and flora, are
                  generated entirely from code and a random seed.
                  <span className={styles.infinigen_name}> Infinigen</span> does
                  not rely on any third-party asset libraries. Users can modify
                  the generation code for any asset to change the distribution
                  of resulting meshes and materials. The code for each asset
                  contains a set of random parameters which can be set manually
                  or seeded randomly.
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
                  contains dozens of pre-written templates of different types of
                  terrain, fauna and flora. Each template is a Python class
                  defining a distribution of assets with randomizable
                  parameters. Users can extend the existing system by writing
                  their own asset generators.
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
                  treats researchers as first-class citizens; all high-frequency
                  detail is modeled using high-resolution geometry, so our
                  annotations are 100% accurate.{" "}
                  <span className={styles.infinigen_name}>Infinigen</span>{" "}
                  doesn't use bump/normal-maps, full-transparency, or any other
                  techniques which add the illusion of detail that isn't there.
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
              header="High-Quality Annotations"
              text={
                <p>
                  <span className={styles.infinigen_name}>Infinigen </span>
                  generates dense annotations for a variety of computer vision
                  tasks, including optical flow, 3D scene flow, depth, surface
                  normals, panoptic segmentation, occlusion boundaries, and
                  various render-passes (albedo, specular, etc.).
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
