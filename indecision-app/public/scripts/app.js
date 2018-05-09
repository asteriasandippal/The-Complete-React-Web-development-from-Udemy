"use strict";

console.log("App.js is running!");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is JSX From app.js!"
    ),
    React.createElement(
        "p",
        null,
        "Some Content here."
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
