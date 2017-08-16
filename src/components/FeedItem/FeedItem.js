import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Title from '../Title/Title';
import Content from '../Content/Content';
import Author from '../Author/Author';
import Image from '../Image/Image';
import s from './FeedItem.css';

class FeedItem extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string,
    };

    render() {
        return (
            <div className={s.content}>
                <Title title={this.props.title}/>
                <Image image={this.props.image}/>
                <Content content={this.props.content}/>
                <Author author={this.props.author}/>
            </div>
        )
    }
}

export default withStyles(s)(FeedItem);