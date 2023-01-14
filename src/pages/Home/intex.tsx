import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

import { Text } from "./styled";

export function Home() {
  return (
    <Box>
      <NavBar />
      <Text>Home</Text>
      <Link to="movie/1">Movie</Link>
    </Box>
  );
}
