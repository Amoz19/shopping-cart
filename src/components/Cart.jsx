import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotal } from "../feactures/products/productsSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  return (
    <>
      {items.length > 0 ? (
        items.map((product) => (
          <div key={product._id} className="bg-blue-100 w-fit rounded-lg my-5">
            <img
              src={product.albumnImage}
              className="w-52 object-cover h-32 rounded-lg"
            />
            <div className="pt-3 text-center">
              <h1 className="text-zinc-800/70">Ablumn : {product.albumName}</h1>
              <p className="text-zinc-800/70">Artist : {product.artist}</p>
            </div>
            <p>{product.price}$</p>
          </div>
        ))
      ) : (
        <p>
          There is no cart currenly. <Link to="/">Go to shopping</Link>
        </p>
      )}
      <Link to="/">Shop again</Link>
    </>
  );
};

export default Cart;
