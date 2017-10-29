import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.js';
import Share from './components/share/share';

window.app = {
    documentReady: false,
    // add your imported components (take a look of Hello component). To boot into
    // template add an html tag example:
    // <div data-component="share"></div>
    components: [
        {name: 'hello', class: Hello},
        {name: 'share', class: Share},
    ],
    instances: []
};

function isClassComponent(component) {
    return (
        typeof component === 'function' && !!component.prototype.isReactComponent
    ) ? true : false
}

function isFunctionComponent(component) {
    return (
        typeof component === 'function' &&
        String(component).includes('return React.createElement')
    ) ? true : false;
}

function isReactComponent(component) {
    return (
        isClassComponent(component) ||
        isFunctionComponent(component)
    ) ? true : false;
}

((funcName, baseObj) => {
    funcName = funcName || "documentReady";
    baseObj = baseObj || window;

    let readyList = [],
        readyFired = false,
        readyEventHandlersInstalled = false;

    function ready() {
        if (!readyFired) {
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            readyList = [];
        }
    }

    function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    }

    baseObj[funcName] = (callback, context) => {
        if (typeof callback !== "function") {
            throw new TypeError("callback for documentReady(fn) must be a function");
        }

        if (readyFired) {
            setTimeout(function () {
                callback(context);
            }, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }

        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", ready, false);
                window.addEventListener("load", ready, false);
            } else {
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    };
})("documentReady", window);

documentReady(function () {
    if (!window.app.documentReady) {
        window.app.documentReady = true;

        // load modules and components
        window.app.components.forEach(component => {
            [].forEach.call(document.querySelectorAll(`*[data-component="${component.name}"]`), (element) => {
                if (!isReactComponent(component.class)) {
                    // you can make a class component without implementing a react
                    window.app.instances.push(new component.class(element));
                } else {
                    // otherwise you can use within react components.
                    ReactDOM.render(<component.class />, element);
                }
            });
        });
    }
});