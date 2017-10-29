import React from 'react';
import ShareLink from './share-link';

class Facebook extends ShareLink {

    shareUrl() {
        return `https://www.facebook.com/sharer/sharer.php?u=${this.state.currentLink}`;
    }

    render() {
        return (
            <a className={'facebook ' + this.props.className} href={this.state.currentLink}
               onClick={event => this.onClick(event)}>
                <svg className="icon fill small default">
                    <use xlinkHref="#facebook"></use>
                </svg>
            </a>
        );
    }
}

export default Facebook;