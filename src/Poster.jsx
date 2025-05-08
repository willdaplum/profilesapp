import { useState, useEffect, useRef } from "react";
import { useElementHeight } from "./useElementHeight";
import FilmDesc from "./FilmDesc.jsx";
import posterSrc from "./assets/a_minecraft_movie-p1640942.jpg";

export default function Poster() {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    preciseWidth: 0,
  });
  const imgRef = useRef(null);

  const updateDimensions = () => {
    if (imgRef.current) {
      const { offsetHeight } = imgRef.current;
      const { width: preciseWidth } = imgRef.current.getBoundingClientRect();
      setDimensions({
        height: offsetHeight,
        width: Math.ceil(preciseWidth),
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleImageLoad = () => {
    updateDimensions();
  };

  const [descRef, descHeight] = useElementHeight();
  const [headerRef, headerHeight] = useElementHeight();

  const maxImageHeight = `calc(100vh - 80px - ${headerHeight}px - ${descHeight}px)`;

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card"
        style={{
          height: "calc(100bh - 80px)",
          width: dimensions.width > 0 ? `${dimensions.width + 1}px` : "auto",
        }}
      >
        <h3
          className="text-center mb-0"
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          NOW SHOWING
        </h3>

        <img
          ref={imgRef}
          src={posterSrc}
          style={{
            maxHeight: maxImageHeight,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onLoad={handleImageLoad}
          alt="poster"
        />
        <div className="card-body p-2" ref={descRef}>
          <FilmDesc posterWidth={dimensions.width} />
        </div>
      </div>
    </div>
  );
}
