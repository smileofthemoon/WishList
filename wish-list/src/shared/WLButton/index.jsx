import React from "react";

import components from "./styles";

const WLButton = props => {
  const { Button } = components;

  return <Button onClick={props.onClick}>{props.buttonText}</Button>;
};
export default WLButton;
