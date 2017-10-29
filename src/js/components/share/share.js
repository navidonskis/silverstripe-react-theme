import React from 'react';
import Component from '../../core/component';
import FacebookShareLink from './facebook-share-link';
import TwitterShareLink from './twitter-share-link';
import LinkedInShareLink from './linkedin-share-link';

class Share extends Component {

    currentLink() {
        return window.location.href;
    }

    render() {
        return (
            <div className="share__container">
                <FacebookShareLink className="share__container--item" currentLink={this.currentLink()}/>
                <LinkedInShareLink className="share__container--item" currentLink={this.currentLink()}/>
                <TwitterShareLink
                    className="share__container--item"
                    currentLink={this.currentLink()}
                    windowHeight={250}
                />
            </div>
        );
    }
}

export default Share;