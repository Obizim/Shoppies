import React, { useContext } from "react";
import { GlobalContext } from "../context.js/GlobalContext";
import Modal from "./Modal";

function Movies() {
  const url = "https://image.tmdb.org/t/p/w500";

  const {
    movies,
    loading,
    searchTerm,
    onhandleSearch,
    onhandleSubmit,
    onBtnClick,
    nominatedMovies,
  } = useContext(GlobalContext);

  return (
    <div className="bg-gray-900 text-gray-100">
      <form
        className="flex flex-col container mx-auto py-8 px-10 space-y-1"
        onSubmit={onhandleSubmit}
      >
        <label htmlFor="search" className="uppercase">
          Search for Movies
        </label>
        <input
          type="text"
          name="search"
          placeholder="🔎 Search for movies"
          onChange={onhandleSearch}
          className="pl-2 py-2 shadow-lg outline-none text-black"
          value={searchTerm}
        />
      </form>

      {nominatedMovies.length >= 5 && <Modal />}

      <section>
        {loading ? (
          <h2 className="h-screen flex items-center justify-center text-xl">
            Search for a movie with good internet connection...
          </h2>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
            {movies.map(({ id, title, poster_path, release_date }) => {
              return (
                <div key={id} className="font-quicksand bg-gray-800">
                  <img src={url + poster_path} alt={title} />
                  <div className="flex flex-col py-2 px-2">
                    <p className="lg:text-xl text-base mt-2 rounded">{title}</p>
                    <p className="text-red-400 text-base mt-2 rounded">
                      {release_date}
                    </p>
                    <button
                      onClick={(e) => {
                        e.target.disabled = true;
                        onBtnClick(id);
                      }}
                      className="bg-gray-300 text-gray-900 py-2 px-4 rounded mt-4 disabled:opacity-0 disabled:bg-red-300"
                    >
                      Nominate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Movies;
