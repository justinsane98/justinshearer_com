import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Hamburger from "./components/Hamburger";
import Fade from "react-reveal/Fade";
import Title from "./components/Title";
import Scene1 from "./components/Scene1";
import Scene2 from "./components/Scene1";

let App = () => (
  <Fragment>
    <div class="container">
      <Hamburger />
      <Title content="Justin Shearer" />

      <Scene1 />
    </div>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById("app"));
