import React from 'react';
import CardSpread from './CardSpread';


const CardSpreadList = ({card, onCardSelection, activeCard}) => {
  return (
    <React.Fragment>
      {Object.values(card).map((singleCard, index) => (
        <CardSpread 
        whenCardDoubleClicked = {onCardSelection}
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        rotateCard = {card[activeCard].name_short}
        />
      ))}
    </React.Fragment>
  )
}

export default CardSpreadList