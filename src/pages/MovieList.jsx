import { Card } from "../Components/Card";
import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";

MovieList.propTypes = {
  apiPath: PropTypes.string,
};

export function MovieList({ apiPath }) {
  const { data: movies } = useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}
