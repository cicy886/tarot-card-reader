import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import CardDetailPopup from "./CardDetailPopup";

function App() {
  const API_URL = "https://rws-cards-api.herokuapp.com/api/v1/cards/";

  // reqType use for random route
  const [reqType, setReqType] = useState("");
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
      <div className="app">
      <main>
        {Object.values(cards).map((card, index) => (
        <CardList 
        card={card} 
        key={index} 
        id = {index}
        onCardSelection={handleChangingSelectedCard}
        />
      ))}
      </main>
      
      <CardDetailPopup
        popupTrigger={popupTrigger}
        setPopupTrigger={setPopupTrigger}
        selectedCard={selectedCard}
      />
    </div>
    </React.Fragment>
    
  );
}

export default App;
