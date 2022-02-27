import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <React.Fragment>
      <img src = {require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name}/>
    </React.Fragment>
  )
}

Card.propTypes = {
  singleCard: PropTypes.string,
  name: PropTypes.string
}

export default Card;