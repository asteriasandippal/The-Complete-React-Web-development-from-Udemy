console.log("App.js is running!");

const template = (
    <div>
        <h1>This is JSX From app.js!</h1>
        <p>Some Content here.</p>
    </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
