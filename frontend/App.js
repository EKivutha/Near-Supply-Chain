import "regenerator-runtime/runtime";
import React from "react";

import "./assets/global.css";
import "./App.css";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import FarmerHome from "./pages/FarmerHome";

export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return (
      <div>
        <Header valueFromBlockchain={valueFromBlockchain} wallet={wallet} />
        <Features />
        <Team />
        <Pricing />
        <Footer />
      </div>
    );
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet
      .callMethod({
        method: "set_greeting",
        args: { message: greetingInput.value },
        contractId,
      })
      .then(async () => {
        return getGreeting();
      })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getGreeting() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: "get_greeting", contractId });
  }

  return (
    <>
      <SignOutButton
        accountId={wallet.accountId}
        onClick={() => wallet.signOut()}
      />
      <main className={uiPleaseWait ? "please-wait" : ""}>
        <FarmerHome />
        {/* <h1>
          Current listed produce:{" "}
          <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form onSubmit={changeGreeting} className="change">
          <label>Update Produce Name</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText /> */}
      </main>
    </>
  );
}
