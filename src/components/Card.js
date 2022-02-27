import React from 'react';

const Card = (props) => {
  return (
    <React.Fragment>
      <img src = {require(`./../img/cards/${props.singleCard}.jpg`)} alt={props.name}/>
    </React.Fragment>
  )
}

export default Card;