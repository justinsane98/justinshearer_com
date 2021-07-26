import React from "react";

const Lyric = function (props) {
  return (
    <div
      className="lyric"
      style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
      tw="text-white font-normal font-serif leading-tight sm:leading-loose text-xl z-10 mb-4"
    >
      {props.content}
    </div>
  );
};

export default Lyric;
