import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { text, action, show = true } = props;

  return (
    <>
      {show && (
        <button
          onClick={action}
          className="sticker-button mt-2 bg-warning border-0 p-3 w-100 text-white fw-bold text-uppercase"
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
