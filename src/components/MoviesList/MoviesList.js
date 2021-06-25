import { Link } from 'react-router-dom';
import routers from '../../routes';
import styles from './MoviesList.module.scss';
import PropTypes from 'prop-types';

const imgPath = 'https://image.tmdb.org/t/p/original';

const MoviesList = ({ movieList }) => {
  return (
    <section className={styles.section}>
      <ul className={`container ${styles.moviesList}`}>
        {movieList.map(({ id, title, poster_path }) => {
          return (
            <li className={styles.moviesListItem} key={id}>
              <Link className={styles.link} to={`${routers.movies}/${id}`}>
                <img
                  className={styles.moviePoster}
                  src={poster_path && `${imgPath}${poster_path}`}
                  alt={title}
                  width="150"
                />
                <p className={styles.movieTitle}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
MoviesList.propTypes = {
  movieList: PropTypes.array,
};
export default MoviesList;
