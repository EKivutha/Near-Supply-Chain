// send confirmation

import React from "react";
import Table from "../../components/Table";
import { Contract } from "../../helpers/helper";
import { Wallet } from "../../near-wallet";

async function ClosedContractsTable() {
  const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });
  const contract = new Contract({
    contractId: process.env.CONTRACT_NAME,
    walletToUse: wallet,
  });

  let allowList = await contract.closedContracts();

  const ClosedContracts = allowList.forEach((elem) => {
    <table className="audit table">
    <thead className="table-th">
      <tr>
        <th>Produce ID</th>
        <th>Produce Quantity</th>
        <th>Buyer ID</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {vm.map((x) => (
        <tr>
          <td>{elem.produce_id}</td>
          <td>{elem.quantity_kg}</td>
          <td>{elem.buyer_id}</td>
        </tr>
      ))}
    </tbody>
  </table>;
  });
  return (
    <div>
      <ClosedContracts />
    </div>
  );
}

export default ClosedContractsTable;
