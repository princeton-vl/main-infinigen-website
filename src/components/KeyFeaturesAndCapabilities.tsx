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
    <section style={{ marginTop: "50px", marginBottom: "50px" }}>
      <div className={"container " + styles.stay_within_navbar}>
        <div style={{ marginBottom: "-50px" }}>
          <h1>Key Features & Capabilities</h1>
        </div>
        <div className={"row"}>
          <div className="col-sm-6">
            <Capability
              header="Procedural"
              text={
                <p>
                  Infinigen is a procedural generator that creates everything
                  entirely from randomized mathematical rules, including all
                  shapes and materials, from macro structures to micro details.
                  <span className={styles.infinigen_name}> Infinigen</span> can
                  create unlimited variations. Users have full control the
                  generation of assets by overriding default parameters of
                  randomization.
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
                  provides generators for diverse objects and scenes in the
                  natural world including plants, animals, terrains, and natural
                  phenomena such as fire, cloud, rain, and snow. The current
                  focus on nature is motivated by the observation that mammalian
                  vision evolved in the natural world. However, Infinigen is
                  expected to expand over time to cover built environments and
                  artificial objects.
                </p>
              }
            >
              <img
                src={"img/diverse.jpeg"}
                style={{ border: "0.5px solid #1a1e13" }}
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
                  Infinigen is optimized for computer vision research,
                  particularly 3D vision. Infinigen does not use
                  bump/normal-maps, full-transparency, or other techniques which
                  fake geometric detail. All fine details of geometry from{" "}
                  <span className={styles.infinigen_name}>Infinigen</span> are
                  real, ensuring accurate 3D ground truth.
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
                  can automatically generate high-quality annotations for a
                  variety of computer vision tasks, including optical flow, 3D
                  scene flow, depth, surface normals, panoptic segmentation,
                  occlusion boundaries. Because users have full access to the
                  rendering process, the annotations are easily customizable.
                </p>
              }
            >
              <div className="row">
                <div className="col col--12">
                  <img
                    src={"img/quad.png"}
                    style={{ border: "0.5px solid #1a1e13" }}
                    className={styles.gt_quad}
                  ></img>
                </div>
                {/* </div> */}
              </div>
            </Capability>
          </div>
        </div>
      </div>
    </section>
  );
}
