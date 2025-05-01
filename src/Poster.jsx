import { useState } from "react";

export default function Poster() {
  const { src } = "a_minecraft_movie-p1640942.jpg";
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const handleImageLoad = (e) => {
    const { offsetHeight, offsetWidth } = e.target;
    setDimensions({ height: offsetHeight, width: offsetWidth });
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card"
        style={{
          height: "calc(100vh - 80px)",
          width: dimensions.width > 0 ? `${dimensions.width + 2}px` : "auto",
        }}
      >
        <h3 className="text-center">NOW SHOWING</h3>
        <img
          src="a_minecraft_movie-p1640942.jpg"
          style={{
            maxHeight: "80%",
            margin: "0 auto",
          }}
          onLoad={handleImageLoad}
          alt="poster"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Image Height: {dimensions.height}px,
            Image Width: {dimensions.width}px
          </p>
        </div>
      </div>
    </div>
  );
}
