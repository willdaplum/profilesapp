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

export default function FilmDesc({
  posterWidth,
  title,
  runTime,
  description,
  rating,
  year,
}) {
  // Define font sizes based on the width of the poster
  const titleSize = Math.max(14, Math.min(posterWidth * 0.06, 20)); // between 14px and 20px
  const textSize = Math.max(12, Math.min(posterWidth * 0.045, 16)); // between 12px and 16px

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p
            style={{
              fontSize: `${titleSize}px`,
              fontWeight: "bold",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: `${textSize}px`,
              fontWeight: "normal",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {year} <FilmRating rating={rating} /> {runTime}
          </p>
        </div>
      </div>
      <div className="row">{/*<p>{description}</p>*/}</div>
    </div>
  );
}
