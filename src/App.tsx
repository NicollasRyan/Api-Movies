import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home/intex";
import { Movie } from "./pages/Movie";
import { Search } from "./pages/Search";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
