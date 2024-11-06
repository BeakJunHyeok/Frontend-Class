const API_KEY = "6ff89c28f1706ed0f75032b019c105c7";
const BASE_PATH = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  original_title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
}

export interface GetMoivesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr`
  ).then((response) => response.json());
};
