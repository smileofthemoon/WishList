import React from "react";

import components from "./styles";

const WLInput = props => {
  const { Input } = components;

  return <Input name={props.name} {...props.input} type={props.type} />;
};
export default WLInput;
