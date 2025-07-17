import { useRef, useEffect } from "react";

import Hls from "hls.js";

export default function VideoWithHLS({ videoSource }) {
  const videoRef = useRef(null);
  console.log("videoRef", videoRef);
  console.log("typeof videoRef", typeof videoRef);
  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource(videoSource);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });
    } else {
      console.log("load");
    }
    return () => {
      // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
      hls.destroy();
    };
  }, []);

  return (
    <video
      className="rounded"
      style={{ width: "100%", height: "auto" }}
      ref={videoRef}
      controls
      autoPlay
    />
  );
}
