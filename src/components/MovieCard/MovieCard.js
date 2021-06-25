import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';

const MovieCard = ({
  title,
  release_date,
  poster_path,
  popularity,
  overview,
  genres,
}) => {
  const imgPath = 'https://image.tmdb.org/t/p/original';
  const year = release_date && release_date.slice(0, 4);
  const userScore = String(Math.round(popularity));

  return (
    <section className={styles.cardSection}>
      <div className={`container ${styles.cardContainer}`}>
        <img
          className={styles.poster}
          src={poster_path && `${imgPath}${poster_path}`}
          alt={title}
          width="300"
        />
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{`${title}(${year})`}</h2>
          <div className={styles.detail}>
            <p className={styles.userScoreTitle}>
              {`User score`}{' '}
              <span className={styles.userScore}>{userScore}</span>
            </p>
            <h2 className={styles.genres}>Genres</h2>
            <ul className={styles.genresList}>
              {genres &&
                genres.map(({ id, name }) => {
                  return (
                    <li className={styles.genresListItem} key={id}>
                      {name}
                    </li>
                  );
                })}
            </ul>
          </div>

          <h2 className={styles.overviewTitle}>Overview</h2>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </section>
  );
};
MovieCard.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
};
export default MovieCard;
