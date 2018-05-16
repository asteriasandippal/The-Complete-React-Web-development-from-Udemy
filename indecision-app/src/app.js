import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

// ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.content}
            {props.content}
            <p>Footer</p>
        </div>
    )
};

const Template = () => {
    return (
        <div>
            <h2>Title</h2>
            <p>Content</p>
        </div>
    )
};

ReactDOM.render(
    <Layout content={<Template/>}>
        <p>Lerwrw werwer</p>
    </Layout>, document.getElementById('app'));
