import React from "react";

const CardDetailPopup = (props) => {
  return (props.popupTrigger)?(
    <React.Fragment>
      <div className="cardDetailPopup">
        <div className="popup-inner">
          <button className="close-btn" onClick={()=>props.setPopupTrigger(false)}>close</button>
          <h3>Card Type: {props.selectedCard.type}</h3>
          <h3>Card Name: {props.selectedCard.name}</h3>
          <h3>Upright Position Meaning: {props.selectedCard.meaning_up}</h3>
          <h3>Reversal Position Meaning: {props.selectedCard.meaning_rev}
          </h3>
        </div>
      </div>
    </React.Fragment>
  ):"";
};

export default CardDetailPopup;