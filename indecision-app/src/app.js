console.log("App.js is running!");
let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two', 'Three']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options && <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>}
    </div>
);
let user = {
    name: 'Sandip', 
    age: 24,
    location: 'Bangalore'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
let count = 0;
const addOne = () => {
    count++;
    console.log('AddOne', count);
    renderCounterApp();
}
const minsOne = () => {
    count--;
    renderCounterApp();
    console.log('MinsOne', count);
}
const reset = () => {
    count = 0;
    console.log('Reset');
    renderCounterApp();
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minsOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();
