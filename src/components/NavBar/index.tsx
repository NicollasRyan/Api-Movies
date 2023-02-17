import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, IconButton, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import {
  Search,
  Profile,
  StyledInputBase,
  TextLink,
  NavBarbox,
  Text,
  ListSave,
} from "./styled";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Box>
      <AppBar position="static">
        <NavBarbox>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <TextLink to="/">NR Movies</TextLink>
          </Typography>
          <Search onSubmit={handleSubmit}>
            <StyledInputBase
              placeholder="Pesquisar filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Search>
          <Profile>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Profile>
          <ListSave color="inherit" onClick={() => navigate("/save")}>
            <BookmarkIcon />
            <Text>Sua Lista</Text>
          </ListSave>
        </NavBarbox>
      </AppBar>
    </Box>
  );
}
