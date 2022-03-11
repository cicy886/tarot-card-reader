import React from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import cardBack from "./../img/themes/backOfTheCard.jpg";

const Card = (props) => {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <React.Fragment>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          id='cardImage'
          className="cardFront"
          onClick = {() => setFlipped((prev) => !prev)}
        >
          <div>
            <span className="card" role="img" aria-label="cards">
            <img src={cardBack} alt='back of the card'/>
            </span>
          </div>
        </div>

        <div
          onDoubleClick={() => props.whenCardDoubleClicked(props.id)}
          className="CardBack"
        >
          <img src={require(`./../img/cards/${props.singleCard}.jpg`)}alt={props.name} />
        </div>
      </ReactCardFlip>

    </React.Fragment>
  );
};

Card.propTypes = {
  singleCard: PropTypes.string,
  name: PropTypes.string,
  whenCardDoubleClicked: PropTypes.func,
  whenCardSingleClicked: PropTypes.func,
};

export default Card;
