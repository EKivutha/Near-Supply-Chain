import React from "react";
import { Wallet } from "../../near-wallet";
import { Contract } from "../../helpers/helper";

function AllowListForm() {
  const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });
  function joinAllowList(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { allowListInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet
      .callMethod({
        method: "join_produce_allow_list",
        args: { message: allowListInput.value },
        contractId: process.env.CONTRACT_NAME,
      })
  }
  return (
    <section>
      <div class="w-full max-w-xs">
        <form
          onSubmit={joinAllowList}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Crop
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Maize"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Crop Variety
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Pannar 691 Maize Variety"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Price/KG
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="KSH60"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
              <div className="loader"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AllowListForm;
