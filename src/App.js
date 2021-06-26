import React, { useState } from "react";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import axios from "axios";
import search from "./components/images/search.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  const onhandleSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_APIKEY}`
      );
      const movies = await response.data.Search;
      setMovies(movies);
    }
  };

  // Add to Nominations List
  function onNominate(movie) {
    setNominatedMovies([...nominatedMovies, movie]);
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-oxygen">
      <Nominations nominatedMovies={nominatedMovies} />
      <section
        className="bg-hero-pattern bg-cover flex items-center justify-center"
        style={{ height: "50vh" }}
      >
        <form
          className="flex flex-col space-y-3 px-4 w-full md:w-6/12"
          onSubmit={onhandleSubmit}
        >
          <label
            htmlFor="search"
            className="font-semibold text-xl text-yellow-500"
          >
            Search for Movies
          </label>
          <input
            type="text"
            name="search"
            placeholder="🔎 Search for movies"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-4 rounded shadow-lg outline-none text-black"
            value={searchTerm}
          />
          {movies.length > 0 && (
            <p>
              Showing <span className="text-yellow-500"> {movies.length} </span>
              results for
              <span className="text-yellow-500"> '{searchTerm}'</span>
            </p>
          )}
        </form>
      </section>

      <main className="flex-grow">
        {movies.length < 1 ? (
          <section className="flex items-center justify-center pt-10">
            <img
              className="w-8"
              src={search}
              alt="illustration of a search icon"
            />
            <p className="uppercase text-yellow-500">Search for movies</p>
          </section>
        ) : (
          <Movies movies={movies} nominate={onNominate} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
