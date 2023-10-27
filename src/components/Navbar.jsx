import React from "react";
import { CartIcon } from "../utils/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();
  // const totalProducts = Object.values(productQuantities).reduce(
  //   (total, quantity) => total + quantity,
  //   0
  // );
  const { amount } = useSelector((state) => state.products);
  return (
    <div className="flex bg-slate-50 justify-around items-center py-3">
      <h1>Kpop Albumn Shop (KAS)</h1>
      <button className="relative">
        <CartIcon onClick={() => navigator("/cart")} />
        <p className="absolute -right-6 top-0 bg-slate-200 rounded-3xl px-2">
          {amount}
        </p>
      </button>
    </div>
  );
};

export default Navbar;
