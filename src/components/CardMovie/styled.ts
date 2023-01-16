import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { Button, Card, CardMedia } from "@mui/material";

export const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 20px;
  white-space: nowrap;
  width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoteBox = styled.p`
  color: white;
`;

export const Note = styled.p`
  align-items: center;
`;

export const StarIconMovie = styled(StarIcon)`
  color: yellow;
`;

export const CardConatiner = styled.div`
  background-color: #363434;
  max-width: 325px;
  height: auto;
`;

export const ButtonList = styled.button`
  color: #ffffff;
`;
