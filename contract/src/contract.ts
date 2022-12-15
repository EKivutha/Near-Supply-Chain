// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, initialize, UnorderedMap } from 'near-sdk-js';
import { currentAccountId, randomSeed } from 'near-sdk-js/lib/api';
import { AccountId } from 'near-sdk-js/lib/types';
import { AllowList, Produce } from './model';

@NearBindgen({})
class HelloNear {
  message: string = "Hi there";

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.message;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }: { message: string }): void {
    near.log(`Saving greeting ${message}`);
    this.message = message;
  }
}
@NearBindgen({})
class ProduceContract {
  produces = new UnorderedMap<any>('map-uid-1');
  produce_invites = new UnorderedMap<any>('map-uid-1');
  allow_list = new UnorderedMap<any>('map-uid-1');

  // @initialize({ privateFunction: true })
  // init({ beneficiary }: { beneficiary: string }) {
  //   this.beneficiary = beneficiary
  // }

  @call({}) // This method changes the state, for which it cost gas
  set_produce(self: { farmer: { set: (arg0: Produce) => void; }; }, name: String, produce_type: String, quantity_kg: bigint): void {
    let currentAcc = randomSeed();
    let farmer_id = currentAccountId().toString();
    let p: Produce = {
      produce_id: currentAcc,
      farmer_id,
      produce_type,
      name,
      quantity_kg,
      buyer_id: "",
    };
    near.log(`Saving produce ${p} `);
    this.produces.set(farmer_id, p);
  }

  @view({})
  get_produce({ from_index = 0, limit = 50 }: { from_index: number, limit: number }): Produce[] {
    let ret: Produce[] = []
    let end = Math.min(limit, this.produces.length)
    for (let i = from_index; i < end; i++) {
      const account_id: string = this.produces.keys.get(i) as string
      const produce: Produce = this.get_produce_for_account(account_id)
      ret.push(produce)
    }
    return ret
  }

  @view({})
  get_produce_for_account(account_id: string): any {
    return {
      account_id,
      produce: this.produces.get(account_id).toString()
    }
  }
  @view({})
  get_produce_for_farmer(self: any): any {
    let ret: Produce[] = []
    let account = currentAccountId().toString()
    let produce_posted = this.produces.get(currentAccountId()).toString()
    ret.push(produce_posted)
    return {
      ret
    }
  }
  @call({}) // This method changes the state, for which it cost gas
  join_produce_allow_list(produce_id: string, quantity_kg: bigint,): void {
    let buyer_id = currentAccountId().toString();
    let p: AllowList = {
      produce_id,
      quantity_kg,
      buyer_id,

    };
    near.log(`Saving greeting ${p} `);
    this.allow_list.set(buyer_id, p)
  }

  @view({})
  get_produce_allow_list(self: any, buyer_id: string): any {
    let ret: AllowList[] = []
    let account = currentAccountId().toString()
    let allow_list = this.allow_list.get(buyer_id).toString()
    ret.push(allow_list)
    return {
      ret
    }
  }
  @call({}) // This method changes the state, for which it cost gas
  invite_to_produce_list(produce_id: string, quantity_kg: bigint, buyer_id: string): void {
    let p: AllowList = {
      produce_id,
      quantity_kg,
      buyer_id,

    };
    near.log(`Saving greeting ${p} `);
    this.produce_invites.set(buyer_id, p)
  }

  @call({}) // This method changes the state, for which it cost gas
  sign_produce_contract(produce_id: string, produce_type: string, name: string, quantity_kg: bigint, farmer_id: string): void {
    let p: Produce = {
      produce_id,
      farmer_id,
      produce_type,
      name,
      quantity_kg,
      buyer_id: currentAccountId().toString(),

    };
    near.log(`Saving greeting ${p} `);
    this.produces.set(farmer_id, p)
  }
  @call({}) // This method changes the state, for which it cost gas
  invest_produce_contract(produce_id: string, produce_type: string, name: string, quantity_kg: bigint, farmer_id: string): void {
    let p: Produce = {
      produce_id,
      farmer_id,
      produce_type,
      name,
      quantity_kg,
      buyer_id: currentAccountId().toString(),

    };
    near.log(`Saving greeting ${p} `);
    this.produces.set(farmer_id, p)
  }
}
