import VideoWithHLS from "./VideoWithHLS.jsx";
import FilmDesc from "./FilmDesc.jsx";

export default function StreamPage() {
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center mt-4">
        {/* Wrapper with fixed width */}
        <div
          style={{ width: "70%" }}
          className="d-flex flex-column align-items-center"
        >
          {/* Video */}
          <div className="mb-4 w-100">
            <VideoWithHLS />
          </div>

          {/* Card */}
          <div className="card w-100">
            <div className="card-body">
              <FilmDesc/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
