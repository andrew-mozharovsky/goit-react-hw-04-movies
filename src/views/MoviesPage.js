import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { searchMovies } from '../services/moviesAPI';
import MoviesList from '../components/MoviesList';

export class MoviesPage extends Component {
  state = {
    searchValue: '',
    movies: [],
  };
  static propTypes = {};

  handleInputChange = e => {
    this.setState({ searchValue: e.currentTarget.value });

    // this.props.location.search = e.currentTarget.value;
  };
  handleSubmit = e => {
    const { searchValue } = this.state;
    this.props.history.push({ search: `search=${searchValue}` });
    e.preventDefault();
    searchMovies(searchValue).then(r =>
      this.setState({ movies: r.results, searchValue: '' }),
    );
  };

  render() {
    const { searchValue, movies } = this.state;
    return (
      <div className="">
        <form onSubmit={this.handleSubmit} className="">
          <label>
            <input
              onChange={this.handleInputChange}
              value={searchValue}
              className=""
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Movie name"
            />
          </label>
          <button type="submit" className="">
            <span className="">Search</span>
          </button>
        </form>
        <MoviesList movieList={movies} />;
      </div>
    );
  }
}

export default MoviesPage;
