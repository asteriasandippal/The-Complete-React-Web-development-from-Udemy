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
