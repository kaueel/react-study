import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';

class Content extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className={s.contentText}>
                {this.props.content}
            </div>
        )
    }
}

export default withStyles(s)(Content);