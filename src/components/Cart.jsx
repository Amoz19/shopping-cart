import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MaterialSymbolsArrowBackRounded,
  MaterialSymbolsFeedbackOutline,
  MaterialSymbolsArrowForward,
} from "../utils/icons";

import { calculateTotal, clearCarts } from "../features/products/productsSlice";

import CartCards from "./CartCards";
const Cart = () => {
  const { items, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  if (items.length < 1) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="flex items-center text-2xl text-zinc-900/50">
          <MaterialSymbolsFeedbackOutline />
          No cart currenly{" "}
        </p>
        <Link
          to="/"
          className="flex items-center text-2xl text-zinc-950 font-bold"
        >
          Go shopping
          <MaterialSymbolsArrowForward />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-2/4 m-auto bg-blue-100 rounded-lg pb-3">
      <CartCards items={items} />
      <div className="px-2">
        <div className="flex justify-between my-3">
          <button
            onClick={() => dispatch(clearCarts())}
            className="bg-red-500 rounded-xl text-white px-4"
          >
            Clear
          </button>
          <p className="bg-zinc-900 text-white p-3 rounded">
            Subtotal - ${total.toFixed(2)}
          </p>
        </div>
        <Link
          to="/"
          className="bg-green-600 w-fit text-[whitesmoke] px-2 mt-4 rounded-xl flex items-center"
        >
          <MaterialSymbolsArrowBackRounded className="mr-1 text-xl" />
          <p>shop again</p>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
