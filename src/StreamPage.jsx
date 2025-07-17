import VideoWithHLS from "./VideoWithHLS.jsx";
import FilmDesc from "./FilmDesc.jsx";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";

export default function StreamPage() {
  const [filmInfo, setFilmInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: when multiple dates worth of films are added to db: select based on current date
  useEffect(() => {
    const fetchFilmInfo = async () => {
      const { data, error } = await supabase
        .from("films")
        .select(
          "id, title, rating, runtime, poster_reference, video_reference, release_date"
        )
        .single();
      if (error) {
        setError("Failed to fetch product information.");
      } else {
        setFilmInfo(data || []);
      }

      setLoading(false);
    };

    fetchFilmInfo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
            <VideoWithHLS videoSource={filmInfo.video_reference} />
          </div>

          {/* Card */}
          <div className="card w-100">
            <div className="card-body">
              <FilmDesc />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
