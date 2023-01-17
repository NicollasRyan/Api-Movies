import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home/intex";
import { Movie } from "./pages/Movie";
import { Search } from "./pages/Search";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}
