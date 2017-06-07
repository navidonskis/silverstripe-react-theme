import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello.jsx';

// add your components here which extending React.Component or Component
// and set element within attribute of data-component="your-component".
const components = [
    {name: 'hello', class: Hello}
];

components.forEach(component => {
    let element = document.querySelector(`*[data-component="${component.name}"]`);

    if (element) {
        ReactDOM.render(
            <{component.class} />,
            element
        );
    }
});