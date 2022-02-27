import React from 'react';

const CardList = ({card}) => {
  return (
    <React.Fragment>
      {Object.values(card).map((singleCard, index) => (
        <Card 
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