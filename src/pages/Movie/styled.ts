import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const HeaderMovie = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 50px 0 30px 0;

  font-family: "Poppins";
  color: white;
`;
export const SideLeft = styled.div``;

export const TitleMovie = styled.h1`
  font-weight: 700;
  font-family: "Poppins";
`;

export const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  color: #828282;
`;

export const DateMovie = styled.p`
  margin-right: 25px;
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

export const StarIconMovie = styled(StarIcon)`
  color: yellow;
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

export const ImgMovieBack = styled.img`
  margin-left: 25px;
  width: 750px;
  opacity: 60%;
`;

export const ImgMovie = styled.img`
  height: 450px;
`;

export const InfoMovie = styled.div`
  margin-top: 20px;
  color: white;
  font-family: "Poppins";
`;

export const Tagline = styled.p`
  margin-bottom: 30px;
`;

export const TitleInfo = styled.p`
  color: white;
  font-family: "Poppins";
  font-size: 25px;
  font-weight: 700;
`;

export const Popularity = styled(TrendingUpIcon)`
  color: #41ed16;
`;

export const TypeMovie = styled.p``;

export const Line = styled.hr`
  margin: 15px 0 15px 0;
`;

export const Overview = styled.p`
  margin-bottom: 10px;
`;
