import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createRoot} from "react-dom/client";

// NEAR
import { Wallet } from "./near-wallet";

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App
        isSignedIn={isSignedIn}
        contractId={CONTRACT_ADDRESS}
        wallet={wallet}
      />
    </React.StrictMode>
  );
};
