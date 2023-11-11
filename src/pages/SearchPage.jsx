import { useSearchParams } from "react-router-dom";
import { Card } from "../Components/Card";
import { useFetch } from "../hooks/useFetch";

export function SearchPage({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No results found for ${queryTerm}`
            : `Results for ${queryTerm}`}
        </p>
      </section>
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
