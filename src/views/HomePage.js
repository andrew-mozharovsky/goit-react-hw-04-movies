import React, { Component } from 'react';

import { fetchMoviesTrend } from '../services/moviesAPI';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    trendMovies: [],
  };
  static propTypes = {};

  componentDidMount() {
    fetchMoviesTrend().then(r => this.setState({ trendMovies: r.results }));
  }

  render() {
    const { trendMovies } = this.state;
    return <MoviesList movieList={trendMovies} />;
  }
}

export default HomePage;
