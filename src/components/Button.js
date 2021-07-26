import React from "react";

function Button(props) {
  return (
    <button
      style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
      tw="font-serif text-lg uppercase bg-red-dark py-2 px-4 mt-2 shadow-default border-0 text-white hover:bg-red hover:cursor-pointer"
    >
      {props.content}
    </button>
  );
}

export default Button;
