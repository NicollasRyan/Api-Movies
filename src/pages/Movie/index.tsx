import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import {
  Content,
  DateMovie,
  DateTime,
  HeaderMovie,
  ImgMovie,
  ImgMovieBack,
  InfoMovie,
  Line,
  Overview,
  PolularityMovie,
  Popularity,
  PosterMovie,
  SideLeft,
  SideRight,
  StarIconMovie,
  Tagline,
  TimeMovie,
  TitleInfo,
  TitleMovie,
  VoteMovie,
} from "./styled";

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

interface MovieProps {
  title: string;
  release_date: number;
  runtime: number;
  vote_average: number;
  popularity: number;
  poster_path: string;
  overview: string;
  tagline: string;
  backdrop_path: string;
  budget: number;
  revenue: number;
}

export function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps>();

  const getMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;

    getMovies(movieUrl);
  }, []);

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageUrl = process.env.REACT_APP_IMG;

  // const yearMovie = movie?.release_date as unknown as Date;
  // const movieDate = yearMovie.getFullYear();

  return (
    <>
      {movie && (
        <Container>
          <HeaderMovie>
            <SideLeft>
              <TitleMovie>{movie.title}</TitleMovie>
              <DateTime>
                <DateMovie>{movie.release_date}</DateMovie>
                <TimeMovie>{movie.runtime} Minutos</TimeMovie>
              </DateTime>
            </SideLeft>

            <SideRight>
              <VoteMovie>
                <StarIconMovie />
                {movie.vote_average}/10
              </VoteMovie>
              <PolularityMovie>
                <Popularity />
                {movie.popularity}
              </PolularityMovie>
            </SideRight>
          </HeaderMovie>

          <Content>
            <PosterMovie>
              <ImgMovie src={imageUrl + movie.poster_path} alt={movie.title} />
              <ImgMovieBack src={imageUrl + movie.backdrop_path} />
            </PosterMovie>
            <InfoMovie>
              {/* <TypeMovie>{movie.genres.number[0].name}</TypeMovie> */}
              <Tagline>"{movie.tagline}"</Tagline>
              <TitleInfo>Sinopse</TitleInfo>
              <Overview>{movie.overview}</Overview>
              <Line />
              <TitleInfo>Orçamento</TitleInfo>
              <Overview>{formatCurrency(movie.budget)}</Overview>
              <Line />
              <TitleInfo>Receita</TitleInfo>
              <Overview>{formatCurrency(movie.revenue)}</Overview>
            </InfoMovie>
          </Content>
        </Container>
      )}
    </>
  );
}
