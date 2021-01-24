import PropTypes from 'prop-types';
import React from 'react';

import './card-image.scss';

const CardImage = ({ src, alt, theme }) => {

  if (!src) {
    return null;
  }

  return <div className={`card-image-container card-${theme}`}>
    <img className="card-image" src={src} alt={alt} />
  </div>;
};

CardImage.defaultProps = {
    alt: 'Car'
}

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  theme: PropTypes.string
}

export default CardImage;
