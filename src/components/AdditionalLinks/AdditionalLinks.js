import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

const AdditionalLinks = props => {
  const {
    match: { url },
  } = props;
  return (
    <>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink
            exact
            to={{
              pathname: `${url}${routes.cast}`,
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={{
              pathname: `${url}${routes.reviews}`,
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default withRouter(AdditionalLinks);
