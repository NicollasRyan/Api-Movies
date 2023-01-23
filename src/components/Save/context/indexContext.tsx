import React, { useState } from "react";
import { MovieProps } from "../../../pages/Home/intex";

interface SaveProps {
  favorites: MovieProps[];
  setFavorites: React.Dispatch<React.SetStateAction<MovieProps[]>>;
}

type IProps = {
  children: React.ReactNode;
};

export const SaveContext = React.createContext<SaveProps>({
  favorites: [],
  setFavorites: () => console.warn("setSave is not ready"),
});

export const SaveProvider = ({ children }: IProps) => {
  const [favorites, setFavorites] = useState<MovieProps[]>([]);

  return (
    <SaveContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};
