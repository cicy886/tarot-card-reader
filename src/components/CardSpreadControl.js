import React, { useState, useEffect } from "react";
import CardSpreadList from "./CardSpreadList";
import CardUprightDetailPopup from './CardUprightDetailPopup';
import CardReversalDetailPopup from './CardReversalDetailPopup';

const CardSpreadControl = () => {
  const randomizeNumber = () => {
    const number = Math.floor(Math.random() * 4);
    return number;
  };

  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=5";

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [uprightPopupTrigger, setUprightPopupTrigger] = useState(false);
  const [reversalPopupTrigger, setReversalPopupTrigger] = useState(false);
  const [activeCard, setActiveCard] = useState(randomizeNumber());

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

  const handleChangingSelectedCardUpright = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setUprightPopupTrigger(true);
  };

  const handleChangingSelectedCardReversal = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setReversalPopupTrigger(true);
  };

  const handleRefresh = () => {
    // it re-renders the component
    window.location.reload();
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
            <CardSpreadList
              key={index}
              card={card}
              id={index}
              activeCard={activeCard}
              onUprightCardSelection={handleChangingSelectedCardUpright}
              onReversalCardSelection={handleChangingSelectedCardReversal}
            />
          ))}
        </div>
        <div className="container">
          <button className="shuffle-btn" onClick={handleRefresh}>
            Try Again!
          </button>
        </div>
      </div>
      <CardUprightDetailPopup
        uprightPopupTrigger={uprightPopupTrigger}
        setUprightPopupTrigger={setUprightPopupTrigger}
        selectedCard={selectedCard}
      />
      <CardReversalDetailPopup
        reversalPopupTrigger={reversalPopupTrigger}
        setReversalPopupTrigger={setReversalPopupTrigger}
        selectedCard={selectedCard}
      />
    </React.Fragment>
  );
};

export default CardSpreadControl;
