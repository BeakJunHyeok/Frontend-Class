let initialState = {
  popularMovie: {},
  topRatedMovie: {},
  upCommingMovie: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        topRatedMovie: payload.topRatedMovie,
        upCommingMovie: payload.upCommingMovie,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
