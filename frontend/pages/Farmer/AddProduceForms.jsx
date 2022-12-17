import React from "react";
import { Wallet } from "../../near-wallet";

function AddProduceForms() {
  const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });
  function addProduce(e) {
    e.preventDefault();
    const { produceInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet.callMethod({
      method: "set_produce",
      args: {
        name: produceInput.name,
        produce_type: produceInput.produce_type,
        quantity_kg: produceInput.quantity_kg,
      },
      contractId: process.env.CONTRACT_NAME,
    });
  }

  return (
    <section>
      <div class="w-full max-w-xs">
        <form
          onSubmit={addProduce}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Crop
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Maize"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="produce_type"
            >
              Crop Variety
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="produce_type"
              type="text"
              placeholder="Pannar 691 Maize Variety"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="quantity_kg"
            >
              Price/KG
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity_kg"
              type="text"
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

export default AddProduceForms;
