import "regenerator-runtime/runtime";
import React from "react";

import "./assets/global.css";
import "./App.css";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import FarmerHome from "./pages/FarmerHome";
import HomePage from "./pages/HomePage";

function App({ isSignedIn, contractId, wallet }) {
  return (
    <BrowserRouter>
      <Routes>
        {!isSignedIn ? (
          <Route exact path="/" element={<HomePage wallet={wallet} />} />
        ) : (
          <Route exact path="/" element={<FarmerHome />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
