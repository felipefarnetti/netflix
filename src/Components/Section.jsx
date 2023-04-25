import Movies from "./Movies";
import data from "../assets/movies_rnexgr.json";

const Section = () => {
  return (
    <main>
      {data.map((movies) => {
        return <Movies category={movies.category} images={movies.images} />;
      })}
    </main>
  );
};

export default Section;
