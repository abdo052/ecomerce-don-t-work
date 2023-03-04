import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png"
import RightButton from './RightButton';
import LeftButton from './LeftButton';


// this componet to show img for productDetalis
const ProductGallery = () => {

const images = [
    {
        original: `${mobile}`,
    },
    {
        original: `${mobile}`,
    },
    {
        original: `${mobile}`,
    }    
];
  return (
    <div
      className="product-gallary-card justify-content-center align-items-center
    pt-2 my-3"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );    
}

export default ProductGallery;