import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleHome = styled.p`
  margin: 50px 0 30px 0;

  display: flex;
  align-items: center;
  justify-items: center;

  color: white;
  font-weight: 700;
  font-family: "Poppins";
  font-size: 20px;
`;

export const Text = styled.p`
  color: white;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: black;

  font-family: "Poppins";
`;

export const BoxCard = styled.div`
  width: 100%;
`;

export const NameMovie = styled.span`
  margin-left: 10px;
  color: #ee1518;
`;
