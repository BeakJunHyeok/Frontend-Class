import React, { useState, useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 20px 10px;
  padding: 10px;
  background: crimson;
  width: 180px;
  border-radius: 8px;
`;

const Home = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upCommingMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" loading={loading} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <div>
        <Banner movie={popularMovie.results[0]} />
        <Title>Popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upCommingMovie} />
      </div>
    );
  }
};

export default Home;
