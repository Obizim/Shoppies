import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function Nominees() {
  const url = "https://image.tmdb.org/t/p/w500";

  const { nominatedMovies, onRemoveClick } = useContext(GlobalContext);

  if (nominatedMovies.length === 0) {
    return (
      <h2 className="h-screen bg-gray-900 text-gray-100 flex items-center justify-center text-xl">
        No Movie has been nominated
      </h2>
    );
  }

  return (
    <section className="bg-gray-900 text-gray-100">
      <h2 className="lg:text-2xl text-base text-red-600 lg:py-4 lg:px-28 md:p-18 p-4">
        Nominations List
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
        {nominatedMovies.map(({ id, original_title, poster_path }) => {
          return (
            <div key={id} className="font-quicksand bg-gray-800">
              <img src={url + poster_path} alt={original_title} />
              <div className="flex flex-col py-2 px-2">
                <p className="lg:text-xl text-base mt-2 rounded">
                  {original_title}
                </p>
                <button
                  onClick={() => onRemoveClick(id)}
                  className="bg-white text-black hover:bg-black hover:text-white transition py-2 px-4 rounded mt-4"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Nominees;
