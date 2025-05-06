import { useState, useEffect, useRef } from "react";
import FilmDesc from "./FilmDesc.jsx";
import posterSrc from "./assets/a_minecraft_movie-p1640942.jpg";

export default function Poster() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const imgRef = useRef(null);

  const updateDimensions = () => {
    if (imgRef.current) {
      const { offsetHeight, offsetWidth } = imgRef.current;
      setDimensions({ height: offsetHeight, width: offsetWidth });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleImageLoad = () => {
    updateDimensions();
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
          ref={imgRef}
          src={posterSrc}
          style={{
            maxHeight: "80%",
            margin: "0 auto",
          }}
          onLoad={handleImageLoad}
          alt="poster"
        />
        <div className="card-body">
          <FilmDesc />
        </div>
      </div>
    </div>
  );
}
