import PropTypes from 'prop-types';
import React, { Fragment, useState, useCallback } from 'react';

import './card-image.scss';

const CardImage = ({ src, alt, description, theme }) => {

	const [modalOpen, toggleModal] = useState(false);

	const modalClickHandler = useCallback(e => {
		e?.preventDefault();

		toggleModal(!modalOpen);

		// Prevent Scroll on Modal Open
		if (modalOpen) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}, [modalOpen]);

	if (!src) {
		return null;
	}

	return <Fragment>
		<div className={`card-image-container card-${theme}`} onClick={modalClickHandler}>
			<a href={`${src}.jpg`} title="See full image" target="_blank" rel="noreferrer">
				<img className="card-image" src={src} alt={alt} />
			</a>
		</div>
		<div className={`modal ${modalOpen ? 'open' : ''}`}>
			<div className="modal-content">
				<span className="close" onClick={modalClickHandler} aria-label="Close Modal">×</span>
				<img className="modal-card-image" src={src} alt={alt} />
				{description && <p className="modal-card-description">{description}</p>}
			</div>
		</div>
	</Fragment>;

};

CardImage.defaultProps = {
    alt: 'Car'
}

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.string
}

export default CardImage;
