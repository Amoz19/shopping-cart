import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  calculateTotal,
  clearCarts,
} from "../feactures/products/productsSlice";

import CartCards from "./CartCards";
const Cart = () => {
  const { items, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  return (
    <>
      <CartCards items={items} />
      <div className="flex justify-between text-white">
        <button onClick={() => dispatch(clearCarts())}>Clear</button>
        <p>Subtotal - {total}$</p>
      </div>
      <Link
        to="/"
        className="bg-green-400 w-fit text-zinc-900 px-2 rounded-xl "
      >
        Shop again
      </Link>
    </>
  );
};

export default Cart;
