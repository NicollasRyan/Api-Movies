import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
  return (
    <Box>
      <AppBar position="static">
        <NavBarbox>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <TextLink to="/">NR Movies</TextLink>
          </Typography>
          <Search>
            <StyledInputBase placeholder="Pesquisar filme" />
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
          <ListSave color="inherit">
            <BookmarkIcon />
            <Text>Sua Lista</Text>
          </ListSave>
        </NavBarbox>
      </AppBar>
    </Box>
  );
}
