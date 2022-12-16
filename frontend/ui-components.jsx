import React from "react";

export function SignInPrompt({ greeting, onClick }) {
  return (
    <main>
      <h1 class="text-5xl font-bold mt-0 mb-6">Hello</h1>
      <h3 class="text-3xl font-bold mb-8">Welcome to DProd!</h3>
      <br />
      <p style={{ textAlign: "center" }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button style={{ float: "right" }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>Start adding contracts for investors to buy:</p>
      <hr />
    </>
  );
}
