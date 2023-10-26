import { useDispatch } from "react-redux";
import products from "../utils/products";
import { addToCart } from "../feactures/products/productsSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 px-20">
      {products.map((product) => (
        <div key={product.id} className="bg-blue-100 w-fit rounded-lg my-5">
          <img
            src={product.albumnImage}
            className="w-52 object-cover h-32 rounded-lg"
          />
          <div className="pt-3 text-center">
            <h1 className="text-zinc-800/70">Ablumn : {product.albumName}</h1>
            <p className="text-zinc-800/70">Artist : {product.artist}</p>
          </div>
          <div>
            <p>{product.price} $</p>
          </div>
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
