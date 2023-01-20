import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { MovieProps } from "../../pages/Home/intex";
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
  return (
    <TextLink to={`movie/${id}`}>
      <CardConatiner>
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
        <CardButton>
          <ButtonList>+ Adionar a lista</ButtonList>
        </CardButton>
      </CardConatiner>
    </TextLink>
  );
}
