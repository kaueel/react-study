import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Image.css';

class Image extends React.Component {
    static propTypes = {
        image: PropTypes.string.isRequired
    };

    render() {
        return (
            <img src={this.props.image} className={s.img} />
        )
    }
}

export default withStyles(s)(Image);