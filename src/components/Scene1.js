import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Lyric from "./Lyric";
import Button from "./Button";

const Scene1 = (props) => (
  <Fragment>
    <div tw="mx-8">
      <Fade>
        <div
          tw="absolute"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.5))",
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
        <div tw="max-w-xxs sm:max-w-full">
          <Lyric content="You've got business rules and APIs" />
        </div>
      </Fade>
      <Fade delay={4000}>
        <div tw="max-w-xxs sm:max-w-full">
          <Lyric content="A remote commitment's what I'm thinking of" />
        </div>
      </Fade>
      <Fade delay={5000}>
        <div tw="max-w-xxxs sm:max-w-full">
          <Lyric content="You wouldn't get this from any other guy" />
        </div>
      </Fade>
      <Fade delay={6000}>
        <Button content="Contact Me" action="" />
      </Fade>
    </div>
  </Fragment>
);

export default Scene1;
