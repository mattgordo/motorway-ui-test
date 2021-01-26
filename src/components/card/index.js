import PropTypes from 'prop-types';
import React from 'react';

import CardImage from '../card-image';
import CardInfo from '../card-info';

import './card.scss';

const Card = ({ info, idx }) => {

	if (!info) {
		return null;
	}

	const theme = (idx + 1) % 2 === 0 ? 'light' : 'dark';

	return <article className={`card card-${theme}`}>
		<CardImage src={info.url} description={info.description} alt={info.alt_description} theme={theme} />
		<CardInfo user={info.user} likes={info.likes} theme={theme} />
	</article>;
};

Card.propTypes = {
	info: PropTypes.shape({
		alt_description: PropTypes.string,
		description: PropTypes.string,
		likes: PropTypes.number,
		url: PropTypes.string,
		user: PropTypes.object
	})
}

export default Card;
