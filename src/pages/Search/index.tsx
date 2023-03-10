import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";

import { CardMovie } from "../../components/CardMovie";
import { MovieProps } from "../Home/intex";
import { Skeletons } from "../../components/Skeletons";

import { TitleHome, NameMovie } from "../Home/styled";

const searchURL = process.env.REACT_APP_SEARCH;
const apiKey = process.env.REACT_APP_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <Container>
      <TitleHome>
        Resultados para: <NameMovie>{query}</NameMovie>:
      </TitleHome>

      <Grid container spacing={3}>
        {movies.length === 0 && <Skeletons />}
        {movies.length > 0 &&
          movies.map((movie: MovieProps) => (
            <Grid item xs={3}>
              <CardMovie
                key={movie.id}
                title={movie.title}
                id={movie.id}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
