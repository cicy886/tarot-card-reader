import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import CardDetailPopup from "./CardDetailPopup";

const CardControl = () => {
  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/suits/pentacles";

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupTrigger, setPopupTrigger] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        <div>Error: {error.message}</div>;
      }
    };

    fetchCards();
  }, []);

  const handleChangingSelectedCard = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setPopupTrigger(true);
  };

  return (
    <React.Fragment>
      <div className="main">
        <div
          className="container-fluid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px 130px",
          }}
        >
          {Object.values(cards).map((card, index) => (
            <CardList
              key={index}
              card={card}
              id={index}
              onCardSelection={handleChangingSelectedCard}
            />
          ))}
        </div>
      </div>
      <CardDetailPopup
        popupTrigger={popupTrigger}
        setPopupTrigger={setPopupTrigger}
        selectedCard={selectedCard}
      />
    </React.Fragment>
  );
};

export default CardControl;
