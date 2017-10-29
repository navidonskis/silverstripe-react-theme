import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx';

// add your components here which extending React.Component or Component
// and set element within attribute of data-component="your-component".
const components = [
    {name: 'hello', class: Hello}
];

components.map(component => {
    [].forEach.call(document.querySelectorAll(`*[data-component="${component.name}"]`), (element) => {
        ReactDOM.render(<component.class />, element);
    });
});