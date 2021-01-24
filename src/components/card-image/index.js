import PropTypes from 'prop-types';
import React from 'react';

import './card-image.scss';

const CardImage = ({ src, alt }) => {

  if (!src) {
    return null;
  }

  return <div className="card-image-container">
    <img className="card-image" src={src} alt={alt} />
  </div>;
};

CardImage.defaultProps = {
    alt: 'Car'
}

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default CardImage;
