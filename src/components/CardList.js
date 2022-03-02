import React from 'react';
import Card from './Card';

const CardList = ({card, onCardSelection}) => {
  return (
    <React.Fragment>
      {Object.values(card).map((singleCard, index) => (
        <Card 
        whenCardClicked = {onCardSelection}
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        />
      ))}
    </React.Fragment>
  )
}

export default CardList