import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import { useContext } from "react";
import { MovieProps } from "../../pages/Home/intex";
import { TextLink } from "../NavBar/styled";
import { SaveContext } from "../Save/context/indexContext";

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
  const removeMovie = () => {
    setFavorites(favorites.filter((movies) => movies.id !== movies.id));
  };

  const isFavorite = favorites.some((movies) => movies.id === movies.id);

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
          onClick={() =>
            isFavorite
              ? removeMovie()
              : addMoviesToFavorites({ title, id, poster_path, vote_average })
          }
        >
          {isFavorite ? "Remover da lista" : "+ Adionar a lista"}
        </ButtonList>
      </CardButton>
    </CardConatiner>
  );
}
