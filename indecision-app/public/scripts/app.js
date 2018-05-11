'use strict';

var Visibility = false;

var toggleVisibility = function toggleVisibility() {
    Visibility = !Visibility;
    render();
};
var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            Visibility ? 'Hide details' : 'Show details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, These are some details you can now see!'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
