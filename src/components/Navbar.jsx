import React from "react";
import { CartIcon } from "../utils/icons";

const Navbar = () => {
  return (
    <div className="flex bg-slate-50 justify-around items-center py-3">
      <h1>Kpop Albumn Shop (KAS)</h1>
      <button className="relative">
        <CartIcon />
        <p className="absolute -right-6 top-0 bg-slate-200 rounded-3xl px-2">
          1
        </p>
      </button>
    </div>
  );
};

export default Navbar;
