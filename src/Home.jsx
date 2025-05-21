import { Button } from "@aws-amplify/ui-react";
import Poster from "./Poster.jsx";
import NavBar from "./NavBar.jsx";

export default function Home() {
  const promoTagline = "One movie, every day.";
  const promoDescription =
    "Stop wasting time flipping through multiple streaming services with bloated catalogs. Find what you're looking for immediately: quality, human-selected films daily. Just $X.XX per month.";
  return (
    <>
      <NavBar />
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Poster />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {promoTagline}
            </h1>
            <p className="lead">{promoDescription}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
