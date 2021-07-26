import React from "react";
import Fade from "react-reveal/Fade";

const Hamburger = (props) => (
  <nav className="navigation" tw="fixed z-20" style={{ top: 0, right: 0 }}>
    <Fade delay={0}>
      <div tw="w-10 mt-4 mr-4 hover:cursor-pointer hover:bg-red pt-4 px-4 pb-2">
        <div tw="bg-white h-2 mb-2 shadow-default"></div>
        <div tw="bg-white h-2 mb-2 shadow-default"></div>
        <div tw="bg-white h-2 mb-2 shadow-default"></div>
      </div>
    </Fade>
  </nav>
);

export default Hamburger;
