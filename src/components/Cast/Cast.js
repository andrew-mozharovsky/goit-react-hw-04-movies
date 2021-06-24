import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchMovieCast } from '../../services/moviesAPI';

export class Cast extends Component {
  static propTypes = {};
  state = {
    moviesCast: [],
  };
  componentDidMount() {
    const { movieId } = this.props;
    searchMovieCast(movieId).then(r => this.setState({ moviesCast: r.cast }));
  }

  render() {
    const { moviesCast } = this.state;
    return (
      <ul>
        {moviesCast.map(({ name, cast_id }) => {
          return <li key={cast_id}>{name}</li>;
        })}
      </ul>
    );
  }
}

export default Cast;