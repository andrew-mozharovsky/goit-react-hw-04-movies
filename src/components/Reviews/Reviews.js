import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchMovieReviews } from '../../services/moviesAPI';

export class Reviews extends Component {
  static propTypes = {};
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
    const { moviesReviews } = this.state;
    return (
      <ul>
        {moviesReviews.map(({ id, author }) => {
          return <li key={id}>{author}</li>;
        })}
      </ul>
    );
  }
}

export default Reviews;
