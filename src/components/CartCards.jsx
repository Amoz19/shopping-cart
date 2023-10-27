import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeCart,
  increase,
  decrease,
} from "../features/products/productsSlice";

import { EpArrowUp, EpArrowDown } from "../utils/icons";

const CartCards = ({ items }) => {
  const dispatch = useDispatch();

  return (
    // <div className="  flex flex-col">
    <>
      {items.map((product) => (
        <div
          key={product._id}
          className="pr-5 bg-blue-100 rounded-xl mt-5 flex justify-between items-center border-b-4 border-red-500"
        >
          <div className="flex">
            <img
              src={product.albumnImage}
              className="w-52 object-cover h-32 rounded-lg"
            />
            <div className="p-3">
              <h1 className="text-zinc-800/70">Ablumn : {product.albumName}</h1>
              {/* <p className="text-zinc-800/70">Artist : {product.artist}</p> */}
              <p>${product.price}</p>
              <button
                className="mt-2 px-2 bg-slate-400 text-slate-800/50 rounded-xl"
                onClick={() => dispatch(removeCart(product.id))}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <EpArrowUp onClick={() => dispatch(increase(product.id))} />
            <p>{product.amount}</p>
            <EpArrowDown
              onClick={() => {
                if (product.amount === 1) {
                  dispatch(removeCart(product.id));
                  return;
                }
                dispatch(decrease(product.id));
              }}
            />
          </div>
        </div>
      ))}
    </>

    // </div>
  );
};

export default CartCards;
