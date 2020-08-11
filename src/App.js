const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
