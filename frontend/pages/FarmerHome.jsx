import React from "react";
import SideNav from "../components/SideNav";
import AddProduceForms from "./Farmer/AddProduceForms";
import Header from "./Farmer/Header";

function FarmerHome() {
  return (
    <div className="bg-white min-h-screen">
      {/* sidenav -> produce list, add produce form, allow list table, send confirmation button, closed contracts table*/}

      <Header />
      <div className="mt-3 flex justify-center items-center w-1/2">
        <AddProduceForms />
      </div>

      {/* produce list */}
      {/* add produce form */}
      {/* allow list table */}
      {/* send confirmation button */}
      {/* closed contracts table */}
    </div>
  );
}

export default FarmerHome;
