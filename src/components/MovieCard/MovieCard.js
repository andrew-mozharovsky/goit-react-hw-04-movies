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
  const userScore = Math.round(popularity);
  return (
    <div>
      <h2>{`${title}(${year})`}</h2>
      <img
        src={poster_path && `${imgPath}${poster_path}`}
        alt={title}
        width="200"
      />
      <p>{`User score ${userScore}%`}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </div>
  );
};
export default MovieCard;
