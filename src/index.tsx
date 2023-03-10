import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Home } from "./pages/Home/intex";
import { Movie } from "./pages/Movie";
import { Search } from "./pages/Search";
import { Save } from "./components/Save";
import { SaveProvider } from "./components/Save/context/indexContext";

import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SaveProvider>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="/search/movie/:id" element={<Movie />} />
            <Route path="/save" element={<Save />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </Router>
    </SaveProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
