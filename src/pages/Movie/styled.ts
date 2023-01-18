import styled, { css } from "styled-components";

type TypePoster = {
  backdrop_path: string;
};

export const HeaderMovie = styled.header`
  display: flex;
  justify-content: space-between;

  margin-top: 50px;

  font-family: "Poppins";
  color: white;
`;

export const TitleMovie = styled.h1`
  font-weight: 700;
  font-family: "Poppins";
`;

export const SideLeft = styled.div``;

export const DateTime = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DateMovie = styled.p`
  margin-right: 10px;
`;

export const TimeMovie = styled.p``;

export const SideRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VoteMovie = styled.p`
  color: white;
  font-family: "Poppins";
`;

export const PolularityMovie = styled.p`
  color: white;
  font-family: "Poppins";
  margin-left: 10px;
`;

export const Content = styled.div``;

export const PosterMovie = styled.div`
  display: flex;
  flex-direction: row;

  color: white;
  font-family: "Poppins";
`;

export const TitleInfo = styled.p`
  color: white;
  font-family: "Poppins";
  font-size: 25px;
  font-weight: 700;
`;

export const ImgMovie = styled.img`
  height: 450px;
`;

export const InfoMovie = styled.div`
  color: white;
  font-family: "Poppins";
`;

export const TypeMovie = styled.p``;

export const Overview = styled.p``;

export const Tagline = styled.p``;
