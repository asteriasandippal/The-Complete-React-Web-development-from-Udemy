class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>Indecision</h2>
                <p>Put your life in the hands of a computer</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                AddOptions component here
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
