import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchMovieCast } from '../../services/moviesAPI';
import defaultImage from '../../img/default-image.png';

import styles from './Cast.module.scss';

export class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  };
  state = {
    moviesCast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    try {
      this.setState({ moviesCast: await searchMovieCast(movieId) });
    } catch (error) {
      console.log(error);
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const imgPath = 'https://image.tmdb.org/t/p/original';
    const { moviesCast } = this.state;

    return (
      <div className="container">
        {moviesCast.length > 0 ? (
          <ul className={styles.castList}>
            {moviesCast.map(({ name, cast_id, profile_path, character }) => {
              return (
                <li className={styles.castListItem} key={cast_id}>
                  <img
                    src={
                      profile_path ? `${imgPath}${profile_path}` : defaultImage
                    }
                    alt={name}
                    width="100"
                  />
                  <p className={styles.name}>{name}</p>
                  <p>{`Character: ${character}`}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="unknown">Unknown cast</h2>
        )}
      </div>
    );
  }
}

export default Cast;
