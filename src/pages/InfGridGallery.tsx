import React from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Image, ThumbnailImageProps } from "react-grid-gallery";
import ReactPaginate from "react-paginate";
import { LazyLoadImage } from "react-lazy-load-image-component";

export interface CustomImage extends Image {
  original: string;
}

const itemsPerPage = 100000;

let items = require("@site/static/gallery_data.json"); //(with path)

const ImageComponent = (props: ThumbnailImageProps) => {
  const { imageProps } = props;

  return (
    <LazyLoadImage
      style={{ objectFit: "cover" }}
      height={imageProps.style.width}
      width={imageProps.style.width}
      src={imageProps.src}
    />
  );
};

export default function InfGridGallery({ children }) {
  const { siteConfig } = useDocusaurusContext();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const images = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log("Pagecount: " + pageCount);

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  console.log(prevIndex);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Layout
      title={`${siteConfig.title} Gallery`}
      description="Description will go into a meta tag in <head />"
    >
      <div>
        {/* <div className={styles.gallery_pagination}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div> */}
        <Gallery
          images={images}
          defaultContainerWidth={300} // needed for some reason.
          onClick={handleClick}
          enableImageSelection={false}
          thumbnailImageComponent={ImageComponent}
        />
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            nextSrc={nextImage.original}
            prevSrc={prevImage.original}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            imagePadding={80}
          />
        )}
      </div>
    </Layout>
  );
}
