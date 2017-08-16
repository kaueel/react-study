import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Author.css';

class Author extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className={s.authorText}>
                - {this.props.author}
            </div>
        )
    }
}

export default withStyles(s)(Author);