import NavBar from "./NavBar.jsx";
import VideoWithHLS from "./VideoWithHLS.jsx";

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
            <div className="card-header">Movie Title</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
