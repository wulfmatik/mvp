import React from 'react';

const ImageGallery = (props) => (
  <div className="image-gallery">
    {
      props.images.map((image, index) => (
        <img style={{width: '300px',
          height: '400px'}} key={index} src={image} />
      ))
    }
  </div>
)

export default ImageGallery;