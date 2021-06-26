const Movies = ({ movies, nominate }) => {
  return (
    <>
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
                    className="bg-yellow-500 text-white py-2 px-4 outline-none rounded mt-4"
                  >
                    Nominate
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
