import "regenerator-runtime/runtime";
import React from "react";

import "./assets/global.css";
import "./App.css";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

import FarmerHome from "./pages/FarmerHome";
import HomePage from "./pages/HomePage";

function App({ isSignedIn, contractId, wallet }) {
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
        <HomePage valueFromBlockchain={valueFromBlockchain} wallet={wallet} />
      </div>
    );
  }

  /**
   * The function is called when the user clicks the "Change Greeting" button. It calls the
   * `set_greeting` method on the contract, and then calls the `get_greeting` method to get the new
   * greeting from the contract
   */
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
  /* This is a button that allows the user to sign out of their wallet. */
  // <SignOutButton
  //       accountId={wallet.accountId}
  //       onClick={() => wallet.signOut()}
  //     />
  return (
    <div className={uiPleaseWait ? "please-wait" : ""}>
      <FarmerHome />
    </div>
  );
}
export default App;
