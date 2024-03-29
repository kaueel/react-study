import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Title.css';

class Title extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <h2 className={s.titleText}>
                {this.props.title}
            </h2>
        )
    }
}

export default withStyles(s)(Title);