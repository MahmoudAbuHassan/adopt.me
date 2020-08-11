import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Cooke",
      animal: "Dog",
      breed: "African",
    }),
    React.createElement(Pet, {
      name: "Odin",
      animal: "Cat",
      breed: "Shirazi",
    }),
    React.createElement(Pet, {
      name: "Juniper",
      animal: "Cat",
      breed: "Street",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
