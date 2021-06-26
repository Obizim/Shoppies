import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';

function GlobalContextProvider({ children }) {
  const [movieState, setmovieState] = useState({
    loading: false,
    movies: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);

  // on Search Form Submit
  const onhandleSubmit = (e, searchTerm) => {
    e.preventDefault();
    if (searchTerm) {
      setmovieState({ ...movieState, loading: true });
      axios.get(SEARCH_API + searchTerm).then((res) => {
        const movies = res.data.results;
        setmovieState({ ...movieState, loading: false, movies: movies });
        console.log(movies);
      });
    }
  };

  function search(e) {
    setSearchTerm(e.target.value);
  }

  // Add to Nominations List
  function onBtnClick(id) {
    // movies.filter((movie) => {
    //   if (movie.id === id) {
    //     setNominatedMovies([...nominatedMovies, { ...movie }]);
    //   }
    //   return movie;
    // });
  }

  // Remove from Nominations List
  function onRemoveClick(id) {
    setNominatedMovies(nominatedMovies.filter((movie) => movie.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        movieState,
        onhandleSubmit,
        nominatedMovies,
        onBtnClick,
        onRemoveClick,
        searchTerm,
        search,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
