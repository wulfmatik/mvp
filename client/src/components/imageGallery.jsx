import React from 'react';

const imageGallery = (props) => (
  <div className="image-gallery">
    {
      props.images.map((image, index) => (
        <img key={index} src={image} />
      ))
    }
  </div>
)

export default imageGallery;