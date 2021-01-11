import React, { createContext, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';


function GlobalContextProvider({children}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");

    function onhandleSubmit(e) {
      e.preventDefault();
  
      if (searchTerm) {
        setLoading(true)
        axios.get(SEARCH_API + searchTerm).then((resp) => {
          const movies = resp.data.results;
          console.log(movies);
          setMovies(movies);
          setLoading(false)
          setSearchTerm("");
        });
      }
    }
    
    function onhandleSearch(e) {
      setSearchTerm(e.target.value);
    }

    return (
        <GlobalContext.Provider value={{movies,loading,searchTerm,onhandleSubmit,onhandleSearch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider