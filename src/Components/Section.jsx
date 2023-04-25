import Movies from "./Movies";
import data from "../assets/movies_rnexgr.json";

const Section = () => {
  return (
    <main>
      {data.map((movies) => {
        return (
          <>
            <h2>{movies.category}</h2>
            <div className="caroussel">
              <Movies key={movies.category} images={movies.images} />
            </div>
          </>
        );
      })}
    </main>
  );
};

export default Section;
