import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

const NavLinks = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_content}`}>
        <ul className={styles.nav_list}>
          <li className={styles.list_item}>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default NavLinks;
