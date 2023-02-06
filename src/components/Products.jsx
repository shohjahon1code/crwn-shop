import React, { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../context/loader-context";
import Loader from "./Loader";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useContext(LoaderContext);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Something went wrorng");
        }

        const data = await res.json();
        setProducts(data);
        setLoading(false);
      };

      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto mt-20">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
