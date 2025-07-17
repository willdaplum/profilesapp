import { Button } from "@aws-amplify/ui-react";
import Poster from "./Poster.jsx";
import NavBar from "./NavBar.jsx";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [posterInfo, setPosterInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: when multiple dates worth of films are added to db: select based on current date
  useEffect(() => {
    const fetchPosterInfo = async () => {
      const { data, error } = await supabase
        .from("films")
        .select("id, title, rating, runtime, poster_reference, release_date")
        .single();
      if (error) {
        setError("Failed to fetch product information.");
      } else {
        setPosterInfo(data || []);
      }

      setLoading(false);
    };

    fetchPosterInfo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const promoTagline = "One movie, every day.";
  const promoDescription =
    "Stop wasting time flipping through multiple streaming services with bloated catalogs. Find what you're looking for immediately: quality, human-selected films daily. Just $X.XX per month.";
  return (
    <>
      <NavBar />
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Poster
              title={posterInfo.title}
              description={posterInfo.description}
              rating={posterInfo.rating}
              year={posterInfo.release_date.slice(0, 4)}
              runTime={
                "" +
                Math.floor(posterInfo.runtime / 3600) +
                "h " +
                Math.floor((posterInfo.runtime % 3600) / 60) +
                "m"
              }
              posterSrc={posterInfo.poster_reference}
            />
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
