import React, { useEffect, useState } from "react";
import star from "./images/star.png";
import box from "./images/box.svg";

function Navbar({ nominatedMovies }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  console.log(nominatedMovies);
  return (
    <>
      <nav
        className="absolute right-4 top-4 cursor-pointer z-10"
        onClick={onOpenSidebar}
      >
        <img src={star} alt="illustration of a star" className="h-12" />
        <p className="absolute top-0 -left-8 p-4 text-center bg-white text-black rounded-full animate-pulse">
          {nominatedMovies.length}/5
        </p>
      </nav>

      <aside
        className={`transform top-0 right-0 w-full sm:w-2/4 lg:w-1/4 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-10
          ${openSidebar ? "-translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-yellow-500 font-semibold text-xl">
            Nominated Movies
          </h2>
          <p className="text-5xl cursor-pointer" onClick={onOpenSidebar}>
            &times;
          </p>
        </div>

        {nominatedMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center space-y-4 h-2/4 py-6 px-2">
            <img src={box} alt="Illustration of an empty box" />
            <h3 className="text-xl text-center">No movie has been nominated</h3>
          </div>
        )}

        <div className="flex flex-col px-4">
          {nominatedMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="flex flex-col px-3 space-y-3 my-3"
            >
              <div className="flex space-x-2">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="max-w-full h-44 object-cover"
                />
                <p className="lg:text-xl font-medium text-base mt-2 truncate">
                  {movie.Title}
                </p>
              </div>
              <button className="py-2 px-4 outline-none border border-yellow-500">
                Remove
              </button>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Navbar;
