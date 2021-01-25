import PropTypes from 'prop-types';
import React from 'react';

import './card-image.scss';

const CardImage = ({ src, alt, theme }) => {

	if (!src) {
		return null;
	}

	return <div className={`card-image-container card-${theme}`}>
		<a href={`${src}.jpg`} title="See full image" target="_blank" rel="noreferrer">
			<img className="card-image" src={src} alt={alt} />
		</a>
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
