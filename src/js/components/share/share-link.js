import React from 'react';
import Component from '../../core/component';

class ShareLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLink: props.currentLink ? props.currentLink : '',
            windowWidth: props.windowWidth ? props.windowWidth : 626,
            windowHeight: props.windowHeight ? props.windowHeight : 500,
        };
    }

    windowOpen() {
        let x = (screen.width / 2 - this.state.windowWidth / 2),
            y = (screen.height / 2 - this.state.windowHeight / 2);

        return window.open(
            decodeURIComponent(this.shareUrl()),
            this.getWindowTitle(),
            `width=${this.state.windowWidth},height=${this.state.windowHeight},left=${x.toString()},top=${y.toString()}`
        );
    }

    getWindowTitle() {
        return document.getElementsByTagName('title')[0].innerText;
    }

    shareUrl() {
        return '';
    }

    onClick(event) {
        event.preventDefault();

        this.windowOpen();

        return false;
    }

    render() {
        return (
            <div/>
        );
    }
}

export default ShareLink;