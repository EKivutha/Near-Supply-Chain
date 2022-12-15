import { Int } from "cardano-wallet-js";
import { NearBindgen, near, call, view, initialize, UnorderedMap, Vector } from 'near-sdk-js'
import { AccountId } from "near-sdk-js/lib/types";

export const STORAGE_COST: bigint = BigInt("1000000000000000000000")

export class Donation {
  account_id: string;
  total_amount: string;
}
export class Produce {
  produce_id: string;
  produce_type: String;
  farmer_id: string;
  name: String;
  quantity_kg: bigint;
  buyer_id: string
}
export class AllowList {
  produce_id: string;
  quantity_kg: bigint;
  buyer_id: string;
}

export class Investor {
  account: AccountId;
  produce_ordered: Vector<Produce>;
  produce_requested: Vector<Produce>;
}
export class Farmer {
  account: AccountId;
  produce_posted: Vector<Produce>;
}
export class App {
  investor: Vector<Investor>;
  farmer: UnorderedMap<Farmer>;
}