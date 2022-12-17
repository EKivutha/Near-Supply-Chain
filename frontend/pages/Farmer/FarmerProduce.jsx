// send confirmation

import React from "react";
import Table from "../../components/Table";
import { Contract } from "../../helpers/helper";
import { Wallet } from "../../near-wallet";

async function FarmerProduce() {
  const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });
  const contract = new Contract({
    contractId: process.env.CONTRACT_NAME,
    walletToUse: wallet,
  });

  let allowList = await contract.farmerProduce();

  const Produce = allowList.forEach((elem) => {
    <table className="audit table">
      <thead className="table-th">
        <tr>
          <th>Produce ID</th>
          <th>Produce Name</th>
          <th>Produce Quantity</th>
          <th>Buyer ID</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {vm.map((x) => (
          <tr>
            <td>{elem.produce_id}</td>
            <td>{elem.name}</td>
            <td>{elem.quantity_kg}</td>
            <td>{elem.buyer_id}</td>
          </tr>
        ))}
      </tbody>
    </table>;
  });
  return (
    <div>
      <Produce />
    </div>
  );
}

export default FarmerProduce;
