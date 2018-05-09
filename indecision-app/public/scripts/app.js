console.log("App.js is running!");

// const template = <p>This is JSX From app.js!</p>;
var template = React.createElement("h2", null, "This is JSX From app.js!");
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
