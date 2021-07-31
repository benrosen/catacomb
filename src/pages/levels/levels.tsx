import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import Amplify from "aws-amplify";
import React from "react";
import awsconfig from "aws-exports";

export const Levels = (): JSX.Element => {
  return (
    <AmplifyAuthenticator>
      <div>
        Levels
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
};
