console.log("App.js is running!");

const template = (
    <div>
        <h1>This is JSX From app.js!</h1>
        <p>Some Content here.</p>
    </div>
);
let user = {
    name: 'Sandip',
    age: 24,
    location: 'bangalore'
}
const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
