import PropTypes from 'prop-types';
import React from 'react';

import './card-info.scss';

const CardInfo = ({ user, likes, theme }) => {

	if (!user?.username) {
		return null;
	}

	const { username } = user;

	return <div className={`card-info card-${theme}`}>
		<p className="user">By: {username}</p>
		{likes && <p className="likes">{likes}</p>}
	</div>;
};

CardInfo.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    likes: PropTypes.number,
    theme: PropTypes.string
}

export default CardInfo;
