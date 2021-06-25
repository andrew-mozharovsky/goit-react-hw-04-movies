import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import styles from './AdditionalLinks.module.scss';

const AdditionalLinks = props => {
  const {
    match: { url },
  } = props;

  return (
    <div className={`container ${styles.containerContent}`}>
      <h2 className={styles.title}>Additional information</h2>
      <ul className={styles.linkList}>
        <li className={styles.list_item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            exact
            to={{
              pathname: `${url}${routes.cast}`,
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            exact
            to={{
              pathname: `${url}${routes.reviews}`,
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(AdditionalLinks);
