import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

import { searchMovieById } from '../services/moviesAPI';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import routes from '../routes';
import AdditionalLinks from '../components/AdditionalLinks';

export class MovieDetails extends Component {
  static propTypes = {};
  state = {
    loading: false,
    movieDetails: {},
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.loading(true);
    try {
      this.setState({ movieDetails: await searchMovieById(movieId) });
    } catch (error) {
      console.error();
    } finally {
      this.loading(false);
    }
  }

  loading = value => {
    this.setState({ loading: value });
  };
  render() {
    const {
      movieDetails: {
        title,
        release_date,
        poster_path,
        popularity,
        overview,
        genres,
      },
      loading,
    } = this.state;
    const { movieId } = this.props.match.params;
    const { url, path } = this.props.match;
    const { location } = this.props;

    return (
      <>
        {loading ? (
          <h1>loaddddddssssss</h1>
        ) : (
          <div>
            <MovieCard
              title={title}
              release_date={release_date}
              poster_path={poster_path}
              popularity={popularity}
              overview={overview}
              genres={genres}
            />
            <AdditionalLinks />

            <Route
              exact
              path={`${url}${routes.cast}`}
              render={() => <Cast movieId={movieId} />}
            />
            <Route
              exact
              path={`${url}${routes.reviews}`}
              render={() => <Reviews movieId={movieId} />}
            />
          </div>
        )}
      </>
    );
  }
}

export default MovieDetails;
// reviews;
