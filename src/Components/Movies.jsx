const Movies = ({ category, images }) => {
  return (
    <section>
      <h1>{category}</h1>
      <ul>
        <li>{images}</li>
      </ul>
    </section>
  );
};

export default Movies;
