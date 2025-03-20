import _ from 'lodash'
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const btn2 = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    btn2.innerHTML = 'Test!';

    element.appendChild(btn);
    element.appendChild(btn2);

    return element;
}

document.body.appendChild(component());