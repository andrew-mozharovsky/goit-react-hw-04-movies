import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import { searchMovieById } from '../services/moviesAPI';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import routes from '../routes';
import AdditionalLinks from '../components/AdditionalLinks';

export class MovieDetails extends Component {
  static propTypes = {};
  state = {
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
  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
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
        backdrop_path,
      },
    } = this.state;
    const { movieId } = this.props.match.params;
    const { url } = this.props.match;
    // const { location, history } = this.props
    // console.log(location.state.from)

    return (
      <>
        <div>
          <MovieCard
            title={title}
            release_date={release_date}
            poster_path={poster_path}
            popularity={popularity}
            overview={overview}
            genres={genres}
            backdrop_path={backdrop_path}
            goBack={this.handleGoBack}
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
      </>
    );
  }
}

export default MovieDetails;
