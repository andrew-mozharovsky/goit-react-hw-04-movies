const KEY = '1bce8e42c1ac006831409581744c2b38';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesTrend = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Something  wrong');
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Something  wrong');
    console.log(error);
  }
};
export const searchMovieById = async movieId => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Something  wrong');
    console.log(error);
  }
};

export const searchMovieCast = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`,
    );
    const json = await response.json();
    return json.cast;
  } catch (error) {
    console.log('Something  wrong');
    console.log(error);
  }
};
export const searchMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&page=1`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Something  wrong');
    console.log(error);
  }
};
