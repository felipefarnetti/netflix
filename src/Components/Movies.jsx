const Movies = (props) => {
  return (
    <>
      {props.images.map((elem) => {
        return <img src={elem} alt="" />;
      })}
    </>
  );
};

export default Movies;
