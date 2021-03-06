import React from "react";

const Button = ({ buttonText, searchName, reqType, setReqType }) => {
  return (
    <React.Fragment>
      <button
        className={searchName === reqType ? "selected" : null}
        id='btn'
        type="button"
        onClick={() => setReqType(searchName)}
      >
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
