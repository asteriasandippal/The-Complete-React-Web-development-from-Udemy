let Visibility = false;

const toggleVisibility = () => {
    Visibility = !Visibility;
    render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {Visibility ? 'Hide details' : 'Show details'}
            </button>
            {Visibility && (
                <div>
                    <p>Hey, These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));

};

render();
