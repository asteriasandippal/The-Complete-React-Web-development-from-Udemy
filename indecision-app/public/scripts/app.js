'use strict';

console.log("App.js is running!");
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two', 'Three']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    )
);
var user = {
    name: 'Sandip',
    age: 24,
    location: 'Bangalore'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
