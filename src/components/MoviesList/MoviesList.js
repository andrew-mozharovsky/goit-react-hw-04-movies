import { Link } from 'react-router-dom';

import routers from '../../routes';
const MoviesList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${routers.movies}/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
