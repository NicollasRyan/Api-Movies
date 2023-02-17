import { useContext } from "react";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";

import { MovieProps } from "../../pages/Home/intex";
import { SaveContext } from "../Save/context/indexContext";

import { TextLink } from "../NavBar/styled";
import {
  Text,
  NoteBox,
  CardConatiner,
  StarIconMovie,
  ButtonList,
  CardButton,
} from "./styled";

const imageUrl = process.env.REACT_APP_IMG;

export function CardMovie({
  id,
  poster_path,
  title,
  vote_average,
}: MovieProps) {
  const { setFavorites, favorites } = useContext(SaveContext);
  const addMoviesToFavorites = (movie: MovieProps) => {
    setFavorites([...favorites, movie]);
  };
  const removeMovie = (filme: MovieProps) => {
    setFavorites(favorites.filter((movies) => movies.id !== filme.id));
  };

  const isFavorite = favorites.filter((movies) => {
    // console.log(movies);
    return movies.id === movies.id;
  });

  return (
    <CardConatiner>
      <TextLink to={`movie/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            alt={title}
            image={imageUrl + poster_path}
          />
          <CardContent>
            <Text>{title}</Text>
            <NoteBox>
              <StarIconMovie />
              {vote_average}
            </NoteBox>
          </CardContent>
        </CardActionArea>
      </TextLink>
      <CardButton>
        <ButtonList
          onClick={() => {
            console.log(isFavorite, id);
            isFavorite && isFavorite.length > 0
              ? isFavorite.map((item) => {
                  if (item.id === id)
                    removeMovie({ title, id, poster_path, vote_average });
                })
              : addMoviesToFavorites({
                  title,
                  id,
                  poster_path,
                  vote_average,
                });
          }}
        >
          {isFavorite && isFavorite.length > 0
            ? isFavorite.map((item) => {
                if (item.id === id) {
                  return "remover da lista";
                } else {
                  return "Adicionar lista";
                }
              })
            : "Adicionar lista"}
        </ButtonList>
      </CardButton>
    </CardConatiner>
  );
}
