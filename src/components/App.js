import React, { useState, useEffect } from 'react';

function App() {

  const API_URL ='https://rws-cards-api.herokuapp.com/api/v1/cards/';
  const [reqType, setReqType] =useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch (`${API_URL}${reqType}`);
        const data = await response.json();
        setCards(data);
      }catch (error) {
        <div>Error: {error.message}</div>
      }
    }

    fetchCards();

  },[reqType])

  return (
    <div className="App">
      <h3>App</h3>
    </div>
  );
}

export default App;
