import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <p className="text-white h-screen flex justify-center items-center">
        There is no cart currenly. <Link to="/">Go to shopping</Link>
      </p>
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
          <p>Subtotal - ${total}</p>
        </div>
        <Link
          to="/"
          className="bg-green-400 w-fit text-zinc-900 px-2 mt-4 rounded-xl "
        >
          Shop again
        </Link>
      </div>
    </div>
  );
};

export default Cart;
