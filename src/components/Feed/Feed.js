import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FeedItem from '../FeedItem/FeedItem';
import s from './Feed.css';

class Feed extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                author: PropTypes.string,
            })
        ).isRequired,
    };

    render() {
        return (
            <div>
                {this.props.posts.map(item =>
                    <FeedItem key={Math.random()} title={item.title} image={item.image} content={item.text} author={item.author}/>
                )}
            </div>
        )
    }
}

export default withStyles(s)(Feed);