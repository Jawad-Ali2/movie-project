import axios from "axios";
import backupImage from "../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg";
import { useLoaderData } from "react-router-dom";

export function MovieDetail() {
  const movie = useLoaderData();
  const image = movie.data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`
    : backupImage;
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.data.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.data.title}
          </h1>
          <p className="my-4">{movie.data.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {movie?.data?.genres.map((genre) => {
              return (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              );
            })}
          </p>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {movie.data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.data.vote_count}
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.data.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.data.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.data.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.data.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.data.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

function loader({ request: { signal }, params: { id } }) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    { signal }
  );
}

export const movieDetailRoute = {
  loader,
};
