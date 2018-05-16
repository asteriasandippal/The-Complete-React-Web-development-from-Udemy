import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeeting = this.getGreeeting.bind(this);
//     }
//     getGreeeting() {
//         return `Hi, My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// const getGreeeting = oldSyntax.getGreeeting;
// console.log(getGreeeting());

// class NewSyntax {
//     name = 'New Mike';
//     getGreeeting = () => {
//         return `Hi, My name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// const newGetGreeeting = oldSyntax.getGreeeting;
// console.log(newGetGreeeting());
