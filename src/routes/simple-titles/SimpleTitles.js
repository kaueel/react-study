import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SimpleTitles.css';

class SimpleTitles extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.simpleTitleContainer}>
        <div className={s.simpleTitleSubContainer}>
          {this.props.news.map(item =>
            <div className={s.simpleTitleItem}>
              {item.title}
            </div>,
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SimpleTitles);
