import React from "react";
import "./IconButton.scss";

const IconButton = (props) => {
  const { show, className, action } = props;

  return <>{show && <div className={className} onClick={action}></div>}</>;
};

export default IconButton;
