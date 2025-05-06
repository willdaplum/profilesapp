function FilmRating({ rating }) {
  const ratingSrc = "/assets/mpaa-" + rating + ".svg";

  return (
    <img
      src={ratingSrc}
      alt={rating}
      style={{
        height: "1em",
        width: "auto",
        verticalAlign: "middle",
        marginLeft: "0.25em",
        marginRight: "0.25em",
      }}
    />
  );
}

export default function FilmDesc() {
  let title = "A Minecraft Movie";
  let runTime = "1h 41m";
  let description =
    "Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter.";
  let rating = "pg";
  let year = "2025";

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>{title}</h5>{" "}
          <p>
            {year} <FilmRating rating={rating} /> {runTime}
          </p>
        </div>
      </div>
      <div className="row">
        <p>{description}</p>
      </div>
    </div>
  );
}
