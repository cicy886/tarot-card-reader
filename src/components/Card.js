import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

  const cardStyle={
    width: "300px",
    height: "400px",
    padding: "20px"
  }

  return (
    <React.Fragment>
      <img src = {require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name} style={cardStyle}/>
    </React.Fragment>
  )
}

Card.propTypes = {
  singleCard: PropTypes.string,
  name: PropTypes.string
}

export default Card;