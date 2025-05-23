import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import CardDetailPopup from "./CardDetailPopup";
import Category from "./Category";

const CategoryControl = () => {
  const API_URL = "https://tarotapi.dev/api/v1/cards/";

  const [reqType, setReqType] = useState("search?type=major");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [popupTrigger, setPopupTrigger] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        <div>Error: {error.message}</div>;
      }
    };

    fetchCards();
  }, [reqType]);

  const handleChangingSelectedCard = (id) => {
    const selectedCard = cards.cards[id];
    setSelectedCard(selectedCard);
    setPopupTrigger(true);
  };

  return (
    <React.Fragment>
      <div className="main">
        <Category reqType={reqType} setReqType={setReqType} />
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

export default CategoryControl;
