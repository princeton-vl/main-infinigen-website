import clsx from "clsx";

import React, { useRef, useState, Component } from "react";
import ImageGallery from "react-image-gallery";

let BASE_PATH = "https://infinigen.cs.princeton.edu/";

const AssetPreview = (props) => {
  var new_list = [];
  let images = props.image_urls;
  for (let i = 0; i < images.length; i++) {
    let path = images[i];
    let new_obj = {
      original: BASE_PATH + path,
      thumbnail: BASE_PATH + path.replace(".png", "_thumbnail.png"),
    };
    new_list.push(new_obj);
  }

  return (
    <ImageGallery
      items={new_list}
      showThumbnails={true}
      infinite={true}
      showBullets={true}
      originalWidth={5000}
      lazyLoad={true}
    />
  );
};

export default AssetPreview;
