import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Title = (props) => (
  <Fragment>
    <Fade delay={500}>
      <h1
        style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
        tw="p-1 mt-32 mb-0 mx-8 text-15xl sm:text-12xl xs:max-w-md leading-none text-white font-normal font-display z-10"
      >
        {props.content}
      </h1>
      <Slide left delay={1000}>
        <div tw="h-2 bg-white mx-8 my-4 xs:max-w-md shadow-default z-10"></div>
      </Slide>
    </Fade>
  </Fragment>
);

export default Title;
