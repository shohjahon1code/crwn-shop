import React from "react";

export const Input = (props) => {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      id={props.id}
    />
  );
};
