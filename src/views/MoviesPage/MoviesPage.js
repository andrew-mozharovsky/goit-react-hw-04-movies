import React, { Component } from 'react';

import queryString from 'query-string';

import { searchMovies } from '../../services/moviesAPI';
import MoviesList from '../../components/MoviesList';
import styles from './MoviesPage.module.scss';

export class MoviesPage extends Component {
  state = {
    searchValue: '',
    movies: [],
  };
  static propTypes = {};
  componentDidMount() {
    const searchValue =
      queryString.parse(this.props.location.search).search || '';
    this.setState({ searchValue });
    searchValue &&
      searchMovies(searchValue).then(r => this.setState({ movies: r.results }));
  }

  getSearchFromProps = props => queryString.parse(props.location.search).search;

  handleInputChange = e => {
    const searchValue = e.currentTarget.value;
    this.setState({ searchValue: searchValue });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    if (searchValue.trim() === '') {
      alert('Неверное значение');
      return;
    }
    this.props.history.push({ search: `search=${searchValue}` });

    searchMovies(searchValue).then(r => this.setState({ movies: r.results }));
  };

  render() {
    const { searchValue, movies } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            <input
              onChange={this.handleInputChange}
              value={searchValue}
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Movie name"
            />
          </label>
          <button type="submit" className={styles.button}>
            <span className="">Search</span>
          </button>
        </form>
        {MoviesList.length > 0 ? <MoviesList movieList={movies} /> : null}
      </div>
    );
  }
}

export default MoviesPage;
