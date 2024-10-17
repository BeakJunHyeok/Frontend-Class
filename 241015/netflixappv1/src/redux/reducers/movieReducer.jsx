let initialState = {
  popularMovie: {},
  topRatedMovie: {},
  upCommingMovie: {},
  genreList: [],
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        topRatedMovie: payload.topRatedMovie,
        upCommingMovie: payload.upCommingMovie,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
