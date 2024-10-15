import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
const Home = () => {
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upCommingMovie } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      <Banner movie={popularMovie.results && popularMovie.results[0]} />
    </div>
  );
};

export default Home;
