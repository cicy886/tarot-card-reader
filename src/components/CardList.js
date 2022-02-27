import React from 'react';
import Card from './Card';

const CardList = ({card}) => {
  return (
    <div className='cardList'>
      {Object.values(card).map((singleCard, index) => (
        <Card 
        key = {index}
        id = {index}
        singleCard = {singleCard.name_short}
        name = {singleCard.name}
        />
      ))}
    </div>
  )
}

export default CardList