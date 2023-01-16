import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { MovieProps } from "../../pages/Home/intex";

import {
  Text,
  NoteBox,
  CardConatiner,
  StarIconMovie,
  ButtonList,
} from "./styled";

const imageUrl = process.env.REACT_APP_IMG;

export function CardMovie({ poster_path, title, vote_average }: MovieProps) {
  return (
    <CardConatiner>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
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
      <CardActions>
        <Button>+ Adionar a lista</Button>
      </CardActions>
    </CardConatiner>
  );
}
