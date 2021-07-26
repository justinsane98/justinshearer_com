import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Lyric from "./Lyric";
import Button from "./Button";

const Scene2 = (props) => (
  <Fragment>
    <div tw="mx-4">
      <Fade>
        <div
          tw="absolute"
          style={{
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.2), rgba(0,0,0,0))",
            top: "-5px",
            bottom: "-5px",
            left: "-5px",
            right: "-5px",
            zIndex: -1
          }}
        />
      </Fade>
      <Fade delay={200}>
        <div
          tw="absolute bg-cover"
          style={{
            backgroundImage: "url(./images/scene1.gif)",
            backgroundPosition: "center center",
            top: "-5px",
            bottom: "-5px",
            left: "-5px",
            right: "-5px",
            zIndex: -2
          }}
        />
      </Fade>
      <Fade delay={2000}>
        <Lyric content="I’m no stranger to the web" />
      </Fade>
      <Fade delay={3000}>
        <Lyric content="You've got business rules" />
      </Fade>
      <Fade delay={3500}>
        <Lyric content="and APIs" tw="-mt-10" />
      </Fade>
      <Fade delay={4000}>
        <Lyric content="A remote commitment's " />
      </Fade>
      <Fade delay={4500}>
        <Lyric content="what I'm thinking of" />
      </Fade>
      <Fade delay={6000}>
        <Lyric content="You wouldn't get this " />
      </Fade>
      <Fade delay={6500}>
        <Lyric content="from any other guy" />
      </Fade>
      <Fade delay={8000}>
        <Button content="Contact Me" action="" />
      </Fade>
    </div>
  </Fragment>
);

export default Scene2;
