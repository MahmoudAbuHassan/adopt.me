const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1",{}, "Cookie"),
        React.createElement("h2",{}, "Parrot"),
        React.createElement("h2",{}, "African"),
        
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
};

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);