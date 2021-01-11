import React, { useContext } from "react";
import { GlobalContext } from "../context.js/GlobalContext";


function Movies() {
//   const SEARCH_API =
//     'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';
  const url = "https://image.tmdb.org/t/p/w500";

  const {movies, loading,searchTerm,onhandleSearch,onhandleSubmit} = useContext(GlobalContext)

  return (
    <div className="bg-gray-900 text-gray-100">
      <form
        className="flex flex-col items-start container justify-center space-y-2 lg:px-32 px-2 py-4"
        onSubmit={onhandleSubmit}
      >
        <label htmlFor="search">Search for Movies</label>
        <input
          type="text"
          name="search"
          placeholder="🔎 Search for movies"
          onChange={onhandleSearch}
          className="pl-2 md:pr-44 pr-20 py-2 rounded shadow-lg outline-none text-black"
          value={searchTerm}
        />
      </form>

      <section>
      {loading ? (
        <h2 className="h-screen flex items-center justify-center text-xl">Search for a movie...</h2>
      ) : 
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
        {movies.map(({ id, title, poster_path,release_date }) => {
            return (
                <div key={id} className="font-quicksand bg-gray-800">
                  <img src={url + poster_path} alt={title} />
                  <div className="flex flex-col py-2 px-2">
                  <p className="lg:text-xl text-base mt-2 rounded">{title}</p>
                  <p className="text-red-400 text-base mt-2 rounded">{release_date}</p>
                  <button className="bg-white text-black hover:bg-black hover:text-white transition py-2 px-4 rounded mt-4">Nominate</button>
                  </div>
                </div>
            );
          })}
      </div>}
      </section>

    </div>
  );
}

export default Movies;
