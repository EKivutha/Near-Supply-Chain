import React from "react";
import { SignInPrompt } from "../ui-components";
import Nav from "./Nav";

function Header({ valueFromBlockchain, wallet }) {
  return (
    <section class="mb-3 py-2">
      <header class="mb-3">
        {/* <!-- Navbar --> */}
        <Nav />
        {/* <!-- Navbar --> */}

        {/* <!-- Background image --> */}
        <div class="relative overflow-hidden bg-no-repeat bg-cover bg-center h-80 bg-hero">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-75">
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12 mb-4 pb-6">
                <SignInPrompt
                  greeting={valueFromBlockchain}
                  onClick={() => wallet.signIn()}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>
    </section>
  );
}

export default Header;
