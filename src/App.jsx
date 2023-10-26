import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
// import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
function App() {
  // const [cart, setCart] = useState([]);
  // const [productQuantities, setProductQuantities] = useState(0);

  // const handleAddToCart = (product) => {
  //   const existingProductIndex = cart.findIndex(
  //     (item) => item.id === product.id
  //   );

  //   if (existingProductIndex !== -1) {
  //     // If the product is already in the cart, update its quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex] = {
  //       ...updatedCart[existingProductIndex],
  //       quantity: updatedCart[existingProductIndex].quantity + 1,
  //     };

  //     setCart(updatedCart);
  //   } else {
  //     // If the product is not in the cart, add it
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }

  //   setProductQuantities({
  //     ...productQuantities,
  //     [product.id]: (productQuantities[product.id] || 0) + 1,
  //   });
  // };

  // productQuantities={productQuantities}
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ProductCard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <ProductCard products={products} handleAddToCart={handleAddToCart} /> */}
    </>
  );
}

export default App;
