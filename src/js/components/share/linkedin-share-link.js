import React from 'react';
import ShareLink from './share-link';

class LinkedInShareLink extends ShareLink {

    shareUrl() {
        let title = decodeURIComponent(this.getWindowTitle());
        let currentLink = this.state.currentLink;

        return `https://twitter.com/intent/tweet?text=${title}&url=${currentLink}`;
    }

    render() {
        return (
            <a className={'twitter ' + this.props.className} href={this.state.currentLink}
               onClick={event => this.onClick(event)}>
                <svg className="icon fill small default">
                    <use xlinkHref="#twitter"></use>
                </svg>
            </a>
        );
    }
}
export default LinkedInShareLink;