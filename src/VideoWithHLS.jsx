import { useRef, useEffect } from "react";

import Hls from "hls.js";

export default function VideoWithHLS() {
  const videoRef = useRef(null);
  console.log("videoRef", videoRef);
  console.log("typeof videoRef", typeof videoRef);
  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource(
        "https://dxp9j1kps1txn.cloudfront.net/ccd81920-fba7-419c-a6dd-b9a3733e94f9/AppleHLS1/IMG_2565_Ott_Hls_Ts_Avc_Aac_16x9_960x540p_3.5Mbps_qvbr.m3u8"
      );
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
