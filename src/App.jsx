// console.log("before any imports", typeof useRef);
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import Hls from "hls.js";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
console.log("after imports", typeof useRef);

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

function VideoWithHLS() {
  const videoRef = useRef(null);
  console.log("videoRef", videoRef);
  console.log("typeof videoRef", typeof videoRef);
  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource("https://dxp9j1kps1txn.cloudfront.net/ccd81920-fba7-419c-a6dd-b9a3733e94f9/AppleHLS1/IMG_2565_Ott_Hls_Ts_Avc_Aac_16x9_960x540p_3.5Mbps_qvbr.m3u8");
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

  // console.log("typeof videoRef", typeof videoRef);
  // console.log("videoRef", videoRef);
  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      style={{ width: "250px", borderRadius: "10px" }}
    />
  );
}

export default function App() {
  const [userprofiles, setUserProfiles] = useState([]);
  const { signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={1}>My Profile</Heading>

      <Divider />

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3">{userprofile.email}</Heading>
            </View>
          </Flex>
        ))}
      </Grid> 
      <VideoWithHLS />
      <Button onClick={signOut}>Sign Out</Button>
    </Flex>
  );
}