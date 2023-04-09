import React, { useRef, useState, Component } from "react";
import clsx from "clsx";

import {
  Slider,
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
  SliderMarker,
} from "@reach/slider";
import "@reach/slider/styles.css";

function pad(num, size) {
  var s = "000000" + num;
  return s.substr(s.length - size);
}

const PreRendered3D = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const imagePath = props.folder + pad(imageIndex, 6) + ".jpg";

  return (
    <div>
      <div className="container">
        <div className="row" style={{ "padding-bottom": "10px" }}>
          <div className={clsx("col col--8")} style={{ textAlign: "center" }}>
            <img src={imagePath}></img>
          </div>
        </div>
        <div className="row">
          <div className={clsx("col col--8")} style={{ textAlign: "center" }}>
            <SliderInput onChange={setImageIndex}>
              <SliderTrack style={{ height: "4px" }}>
                <SliderRange />
                <SliderHandle style={{ height: "16px", width: "16px" }} />
              </SliderTrack>
            </SliderInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRendered3D;
