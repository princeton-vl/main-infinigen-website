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
  let frame_begin = props.begin;
  let frame_end = props.end;
  let starting_pos = Math.floor((frame_begin + frame_end) / 2);
  const [imageIndex, setImageIndex] = useState(starting_pos);

  const imagePath =
    "/pre_rendered/" + props.folder + "/" + pad(imageIndex, 6) + ".jpeg";

  return (
    <div>
      <div className="container">
        <div className="row" style={{ paddingBottom: "10px" }}>
          <div className={clsx("col col--8")} style={{ textAlign: "center" }}>
            <img src={imagePath}></img>
          </div>
        </div>
        <div className="row">
          <div className={clsx("col col--8")} style={{ textAlign: "center" }}>
            <SliderInput
              className="padding-bottom--lg"
              onChange={setImageIndex}
              min={frame_begin}
              max={frame_end}
              value={imageIndex}
            >
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
