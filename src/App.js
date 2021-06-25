import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import routes from './routes';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';
// import MovieDetails from './views/MovieDetails';

import NavLinks from './components/NavLinks';
const HomePage = lazy(() => import('./views/HomePage'));
const MovieDetails = lazy(() => import('./views/MovieDetails'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <NavLinks />
        <Suspense
          fallback={
            <Loader
              className={'spinier'}
              type="Oval"
              color="#00BFFF"
              height={50}
              width={50}
            />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.moviesDetails} component={MovieDetails} />
            <Route path={routes.movies} component={MoviesPage} />
            {/* <Route render={() => <Redirect to={{ pathname: routes.home }} />} /> */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
