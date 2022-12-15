import React from "react";

function AddProduceForms() {
  // function changeGreeting(e) {
  //     e.preventDefault();
  //     setUiPleaseWait(true);
  //     const { greetingInput } = e.target.elements;

  //     // use the wallet to send the greeting to the contract
  //     wallet
  //       .callMethod({
  //         method: "set_greeting",
  //         args: { message: greetingInput.value },
  //         contractId,
  //       })
  //       .then(async () => {
  //         return getGreeting();
  //       })
  //       .then(setValueFromBlockchain)
  //       .finally(() => {
  //         setUiPleaseWait(false);
  //       });
  //   }
  function addProduce(params) {
    return;
  }
  return (
    <section>
      <form onSubmit={addProduce} className="change">
        <label>Update Produce Name</label>
        <div>
          <input
            autoComplete="off"
            //   defaultValue={valueFromBlockchain}
            id="greetingInput"
          />
          <button>
            <span>Save</span>
            <div className="loader"></div>
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddProduceForms;
