// farmer
//    *produce ->name
//             -> variety
//            -> quanity
//            -> price per kg
// investor
//       -> allow list
 
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{UnorderedMap, Vector};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, near_bindgen, AccountId};
 
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Debug)]
#[serde(crate = "near_sdk::serde")]
pub struct Produce {
    uniq_id: Vec<u8>,
    produce_type: String,
    name: String,
    quanity_kg: i32,
}
 
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Debug)]
 /// A struct that holds the account id of the investor and the produce ordered by the
/// investor.
pub struct Investor {
    account: AccountId,
    produce_orderd: Vector<i32>,
}
 
impl Default for Investor {
    fn default() -> Self {
        Investor {
            account: AccountId::new_unchecked(String::from("")),
            produce_orderd: Vector::new(b"r".to_vec()),
        }
    }
}
 
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct App {
    investor: Vector<Investor>,
    farmer: UnorderedMap<AccountId, Produce>,
}
 
impl Default for App {
    fn default() -> Self {
        App {
            investor: Vector::new(b"r".to_vec()),
            farmer:UnorderedMap::new(b"p".to_vec()),
        }
    }
}
 
#[near_bindgen]
impl App {
    pub fn add_new_staff(&mut self, name: String, produce_type: String, quantity: i32) {
        let p: Produce = Produce {
            uniq_id: env::random_seed(),
            produce_type: produce_type,
            name: name,
            quanity_kg: quantity,
        };
        self.farmer.insert(&env::current_account_id(), &p);
    }
    pub fn get_produce(self) -> Option<Produce> {
        return self.farmer.get(&env::current_account_id());
    }
    pub fn get_produce_for_a_farmer(self,account: String ) -> Option<Produce> {
        return self.farmer.get(AccountId::from(account));
    }
    pub fn get_all_produce(& mut self) -> Vec<Produce> {
        let mut produces: Vec<Produce> = vec![];
 
        let input = self.farmer.values_as_vector().to_vec();
 
         for key in input.iter().enumerate() {
           produces.append(key);
         }
 
        return produces;
    }
    
}