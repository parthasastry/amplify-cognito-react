import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function PremiumContent() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <h1>Hello, welcome to my website</h1>
          <h3>You are authenticated</h3>
          <button onClick={signOut}>SignOut</button>
        </div>
      )}
    </Authenticator>
  );
}

export default PremiumContent;
