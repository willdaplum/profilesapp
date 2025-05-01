import { Authenticator, useTheme, Image, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // Required for base styles
import "./Authenticator.css";
import NavBar from "./NavBar.jsx";

const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Amplify logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </View>
      );
    },
}

export default function ProtectedLayout({ children }) {
  return (
    <Authenticator components={components}>
      {({ user, signOut }) => (
        <>
          <NavBar user={user} signOut={signOut} />
          {children}
        </>
      )}
    </Authenticator>
  );
}
