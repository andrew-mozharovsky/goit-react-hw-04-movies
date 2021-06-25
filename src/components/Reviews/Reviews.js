import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchMovieReviews } from '../../services/moviesAPI';

import styles from './Reviews.module.scss';

export class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };
  state = {
    moviesReviews: [],
  };
  componentDidMount() {
    const { movieId } = this.props;
    searchMovieReviews(movieId).then(r =>
      this.setState({ moviesReviews: r.results }),
    );
  }

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    const { moviesReviews } = this.state;

    return (
      <div className="container">
        {moviesReviews.length > 0 ? (
          <ul className={styles.list}>
            {moviesReviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h2 className={styles.authorTitle}>{`Author: ${author}`}</h2>
                  <p className={styles.content}>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="unknown">No reviews </h2>
        )}
      </div>
    );
  }
}

export default Reviews;
