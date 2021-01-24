import PropTypes from 'prop-types';
import React from 'react';

import './card-info.scss';

const CardInfo = ({ user, description, theme }) => {

  if (!user?.username) {
    return null;
  }

  const { username } = user;

  return <div className={`card-info card-${theme}`}>
    {/* {description && <p className="description">{description}</p>} */}
    <p className="user">Uploaded by: {username}</p>
  </div>;
};

CardInfo.propTypes = {
    user: PropTypes.shape({
        bio: PropTypes.string,
        first_name: PropTypes.string,
        id: PropTypes.string,
        last_name: PropTypes.string,
        location: PropTypes.string,
        name: PropTypes.string,
        profile_image: PropTypes.string,
        total_collections: PropTypes.number,
        total_likes: PropTypes.number,
        total_photos: PropTypes.number,
        updated_at: PropTypes.string,
        username: PropTypes.string
    })
}

export default CardInfo;
