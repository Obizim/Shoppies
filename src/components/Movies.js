import { useEffect, useState } from "react";

const Movies = ({ movies, nominate, nominatedMovies }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (nominatedMovies.length > 4) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [nominatedMovies.length]);
  const NominationStatus = (id) => {
    const isNominated = nominatedMovies.filter((movie) => movie.imdbID === id);
    return isNominated.length > 0;
  };
  return (
    <>
      {/* ALERT NOTIFICATION */}
      {alert && (
        <div
          className="bg-yellow-800 fixed bottom-1 transition-all right-3 border-l-4 text-yellow-50 p-4"
          role="alert"
        >
          <p className="font-bold">Limit Reached!</p>
          <p>You've used up your nominations!</p>
        </div>
      )}

      <section className="transition duration-500 ease-linear grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:py-10 lg:px-32 p-4">
        {movies
          .filter((movie) => {
            if (movie.Poster === null) {
              return false;
            }
            return true;
          })
          .map((movie) => {
            return (
              <div key={movie.imdbID} className="rounded-full">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-96 object-cover"
                />
                <div className="flex flex-col py-2 px-2 shadow">
                  <p className="lg:text-xl font-semibold text-base mt-2 truncate">
                    {movie.Title}
                  </p>
                  <p className="text-yellow-500 text-base mt-2 rounded">
                    {movie.Year}
                  </p>
                  <button
                    onClick={() => nominate(movie)}
                    disabled={
                      NominationStatus(movie.imdbID) ||
                      nominatedMovies.length > 4
                    }
                    className="bg-yellow-500 flex justify-center text-white py-2 px-4 outline-none rounded mt-4 disabled:bg-gray-900"
                  >
                    {NominationStatus(movie.imdbID) ? (
                      <>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                            fill="currentColor"
                          />
                        </svg>
                      </>
                    ) : nominatedMovies.length > 4 ? (
                      <>Limit Reached</>
                    ) : (
                      <>Nominate</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Movies;
