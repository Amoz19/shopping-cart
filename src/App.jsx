import { useState } from "react";
import products from "./utils/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <ProductCard products={products} />
    </>
  );
}

export default App;
