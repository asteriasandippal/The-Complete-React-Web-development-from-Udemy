console.log("App.js is running!");
let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submit');

    const option = e.target.elements.option.value;
    console.log(option);
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>}
            <p>{app.options.length}</p>
            {app.options.length > 0 ? <button onClick={onRemoveAll}>Remove All</button> : null }
            {app.options.length > 0 ? <ol>
                {app.options.map(option => {
                    return <li key={option}>{option}</li>;
                })}
            </ol> : null }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
} 
render();
