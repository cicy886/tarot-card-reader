import React from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import cardBack from "./../img/themes/backOfTheCard.jpg";

const CardSpread = (props) => {
  const [isFlipped, setFlipped] = React.useState(false);

  const animateCard = () => {
    let transform = `rotate(180deg)`;
    return transform;
  };
  const RotatedCard = () => {
    if (props.rotateCard === props.singleCard) { 
      return(
        <div onDoubleClick={() => props.whenReversalCardDoubleClicked(props.id)}
        className="CardBack">
          <img
        src={require(`./../img/cards/${
          props.rotateCard
        }.jpg`)}
        alt={props.name}
        style={{ transform: animateCard() }}
      />
        </div>
      )
    } else {
      return (
        <div onDoubleClick={() => props.whenUprightCardDoubleClicked(props.id)}
        className="CardBack">
        <img
        src={require(`./../img/cards/${props.singleCard}.jpg`)}
        alt={props.name}
      />
        </div>
      )
    }
  };

  return (
    <React.Fragment>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          id="cardImage"
          className="cardFront"
          onClick={() => [setFlipped((prev) => !prev), props.whenCardRotate]}
        >
            <div>
              <span className="card" role="img" aria-label="cards">
                <img src={cardBack} alt="back of the card" />
              </span>
            </div>
          </div>
          {RotatedCard()}
      </ReactCardFlip>
    </React.Fragment>
  );
};

CardSpread.propTypes = {
  singleCard: PropTypes.string,
  name: PropTypes.string,
  whenCardDoubleClicked: PropTypes.func,
  whenCardSingleClicked: PropTypes.func,
};

export default CardSpread;
