'use strict';

console.log("App.js is running!");

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX From app.js!'
    ),
    React.createElement(
        'p',
        null,
        'Some Content here.'
    )
);
var user = {
    name: 'Sandip',
    age: 24,
    location: 'bangalore'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
