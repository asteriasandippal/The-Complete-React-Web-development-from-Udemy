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
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
