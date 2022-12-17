import { utils } from "near-api-js";

export class Contract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }
  async latestAllowList() {
    let intrested_investors = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_produce_allow_list",
      args: { limit: 20 },
    });

    return intrested_investors;
  }

  async latestProduceList() {
    let produce = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_produce",
      args: { limit: 20 },
    });

    return produce;
  }
  async closedContracts() {
    let produce = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_produce",
      args: { limit: 20 },
    });

    return produce;
  }
  async farmerProduce() {
    let produce = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_produce_for_farmer",
      args: { limit: 20 },
    });

    return produce;
  }
}
