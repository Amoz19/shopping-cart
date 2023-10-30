import { useDispatch } from "react-redux";
import products from "../utils/products";
import { addToCart } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 px-20">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 w-52 rounded-lg my-5 border-b-4 border-red-500"
        >
          <img
            src={product.albumnImage}
            className="w-52 object-cover rounded-lg"
          />
          <div className="px-4 py-2">
            <h1 className="text-zinc-800/70">{product.albumName}</h1>
            <p className="bg-red-700 w-fit rounded-3xl px-2 text-white">
              ${product.price}
            </p>
            {/* <p className="text-zinc-800/70">Artist : {product.artist}</p> */}
          </div>
          {/* <div>
            <p>{product.price} $</p>
          </div> */}
          <div className="flex flex-col items-center">
            <button
              className="bg-green-900 text-white px-3 py-1 rounded-2xl m-3"
              onClick={() => {
                dispatch(addToCart(product));
                navigate("/cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
