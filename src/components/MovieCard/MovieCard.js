import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';
import Loader from 'react-loader-spinner';

class MovieCard extends Component {
  render() {
    const { title, release_date, poster_path, popularity, overview, genres } =
      this.props;
    const imgPath = 'https://image.tmdb.org/t/p/original';
    const year = release_date && release_date.slice(0, 4);
    const userScore = String(Math.round(popularity));

    return (
      <div>
        <div className={`container ${styles.buttonContainer}`}>
          <button
            className={styles.button}
            onClick={this.props.goBack}
            type="button"
          >
            Go back
          </button>
        </div>

        {title !== undefined ? (
          <section className={styles.cardSection}>
            <div className={`container ${styles.cardContainer}`}>
              <img
                className={styles.poster}
                src={poster_path && `${imgPath}${poster_path}`}
                alt={title}
                width="300"
                height="450"
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
                    {genres.length > 0 ? (
                      genres.map(({ id, name }) => {
                        return (
                          <li className={styles.genresListItem} key={id}>
                            {name}
                          </li>
                        );
                      })
                    ) : (
                      <p className={styles.userScore}>Unknown genre</p>
                    )}
                  </ul>
                </div>

                <h2 className={styles.overviewTitle}>Overview</h2>
                <p className={styles.overview}>{overview}</p>
              </div>
            </div>
          </section>
        ) : (
          <Loader
            className={'spinier'}
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
          />
        )}
      </div>
    );
  }
}

// const MovieCard = ({
//   title,
//   release_date,
//   poster_path,
//   popularity,
//   overview,
//   genres,
// }) => {
//   const imgPath = 'https://image.tmdb.org/t/p/original';
//   const year = release_date && release_date.slice(0, 4);
//   const userScore = String(Math.round(popularity));

//   return (
//     <div>
//       <div className='container'><button type="button">Go back</button></div>

//       {title !== undefined ? <section className={styles.cardSection}>

//         <div className={`container ${styles.cardContainer}`}>
//           <img
//             className={styles.poster}
//             src={poster_path && `${imgPath}${poster_path}`}
//             alt={title}
//             width="300" height="450"
//           />
//           <div className={styles.cardContent}>
//             <h2 className={styles.title}>{`${title}(${year})`}</h2>
//             <div className={styles.detail}>
//               <p className={styles.userScoreTitle}>
//                 {`User score`}{' '}
//                 <span className={styles.userScore}>{userScore}</span>
//               </p>
//               <h2 className={styles.genres}>Genres</h2>
//               <ul className={styles.genresList}>
//                 {genres.length > 0 ?
//                   genres.map(({ id, name }) => {
//                     return (
//                       <li className={styles.genresListItem} key={id}>
//                         {name}
//                       </li>
//                     );
//                   }) : <p className={styles.userScore}>Unknown genre</p>}
//               </ul>
//             </div>

//             <h2 className={styles.overviewTitle}>Overview</h2>
//             <p className={styles.overview}>{overview}</p>
//           </div>
//         </div>
//       </section> : <Loader
//         className={"spinier"}
//         type="Oval"
//         color="#00BFFF"
//         height={50}
//         width={50}
//       />}
//     </div>
//   );
// };
MovieCard.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
};
export default MovieCard;
