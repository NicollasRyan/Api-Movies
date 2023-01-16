import { Toolbar, InputBase, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarbox = styled(Toolbar)`
  background-color: #363434;
`;

export const Search = styled.form`
  position: relative;
  border-radius: 8px;

  background-color: white;
`;

export const SearchIconWrapper = styled.div`
  padding: 8px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  padding: spacing(1, 1, 1, 0);

  padding: 5px;
  width: 100%;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: white;

  font-weight: 700;
  font-family: "Poppins";
  transition: 0.5s;

  &:hover {
    color: #b2b2b2;
  }
`;

export const Profile = styled.div`
  margin-left: 15px;

  &:hover {
    color: #b2b2b2;
  }
`;

export const Text = styled.p`
  font-size: 15px;

  font-weight: 400;
  font-family: "Poppins";
`;

export const ListSave = styled(IconButton)`
  &:hover {
    color: #b2b2b2;
  }
`;
