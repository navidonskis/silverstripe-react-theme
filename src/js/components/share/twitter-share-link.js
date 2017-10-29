import React from 'react';
import ShareLink from './share-link';

class TwitterShareLink extends ShareLink {

    shareUrl() {
        let title = decodeURIComponent(this.getWindowTitle());
        let currentLink = this.state.currentLink;
        let description = document.querySelector('meta[name="description"]');

        if (description) {
            description = description.getAttribute('content');
        } else {
            description = '';
        }

        return `http://www.linkedin.com/shareArticle?mini=true&title=${title}&summary=${description}&url=${currentLink}`;
    }

    render() {
        return (
            <a className={'linkedin ' + this.props.className} href={this.state.currentLink}
               onClick={event => this.onClick(event)}>
                <svg className="icon fill small default">
                    <use xlinkHref="#linkedin"></use>
                </svg>
            </a>
        );
    }
}
export default TwitterShareLink;