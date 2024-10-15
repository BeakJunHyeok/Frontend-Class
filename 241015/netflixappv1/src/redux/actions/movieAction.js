// const getMovies = () => {
//   return async (dispatch) => {
//     const url =
//       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
//     const response = await fetch(url);
//     const data = response.json();
//   };
// };

// export const movies = { getMovies };

import api from "../api";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const topRatedMovieApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const upCommingMovieApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const [popularMovie, topRatedMovie, upCommingMovie] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upCommingMovieApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovie: popularMovie.data,
        topRatedMovie: topRatedMovie.data,
        upCommingMovie: upCommingMovie.data,
      },
    });
  };
};

export const movieAction = { getMovies };
