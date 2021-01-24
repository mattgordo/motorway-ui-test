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
    <CardImage src={info.url} alt={info.alt_description} />
    <CardInfo user={info.user} description={info.description} theme={theme} />
  </article>;
};

Card.propTypes = {
  info: PropTypes.shape({
    alt_description: PropTypes.string,
    color: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.number,
    updated_at: PropTypes.string,
    url: PropTypes.string,
    user: PropTypes.object
  })
}

export default Card;
