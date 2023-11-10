import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            MovieFlix™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="/movies/popular"
              className="mr-4 hover:underline md:mr-6 "
            >
              Popular
            </Link>
          </li>
          <li>
            <Link to="/movies/top" className="mr-4 hover:underline md:mr-6 ">
              Top-Rated
            </Link>
          </li>
          <li>
            <Link
              to="/movies/upcoming"
              className="mr-4 hover:underline md:mr-6 "
            >
              Upcoming
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jawadali.ig/"
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jawadali.ig/"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
