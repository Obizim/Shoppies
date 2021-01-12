import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';

function GlobalContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);

  // on Search Form Submit
  function onhandleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      setLoading(true);
      axios.get(SEARCH_API + searchTerm).then((resp) => {
        const movies = resp.data.results;
        console.log(movies);
        setMovies(movies);
        setLoading(false);
        setSearchTerm("");
      });
    }
  }

  function onhandleSearch(e) {
    setSearchTerm(e.target.value);
  }

  // Add to Nominations List
  function onBtnClick(id) {
    movies.filter((movie) => {
      if (movie.id === id) {
        setNominatedMovies([...nominatedMovies, { ...movie }]);
      }
      return movie;
    });
  }

  // Remove from Nominations List
  function onRemoveClick(id) {
    setNominatedMovies(nominatedMovies.filter((movie) => movie.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        movies,
        loading,
        searchTerm,
        onhandleSubmit,
        onhandleSearch,
        nominatedMovies,
        onBtnClick,
        onRemoveClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
