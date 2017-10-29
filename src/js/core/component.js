import React from 'react';
import axios from 'axios';

export default class Component extends React.Component {

    /**
     * Initialize react component within helper methods and axios library to
     * work with ajax. CSRF token are optionally if you need to secure requests
     * between axios and backend (SilverStripe) system.
     *
     * @param {object} args
     */
    constructor(...args) {
        super(args);

        let metaToken = document.querySelector('meta[name="X-Csrf-Token"]');

        if (metaToken) {
            axios.defaults.headers.common['X-Csrf-Token'] = metaToken.getAttribute('content');
        }

        this.ajax = axios;
    }

    /**
     * did element has class name
     *
     * @param element
     * @param className
     * @returns {boolean}
     */
    hasClass(element, className) {
        return element.classList ? element.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(element.className);
    }

    /**
     * add class to the element
     *
     * @param element
     * @param className
     */
    addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else if (!this.hasClass(element, className)) {
            element.className += '' + className;
        }
    }

    /**
     * remove class from the element
     *
     * @param element
     * @param className
     */
    removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
        }
    }
}