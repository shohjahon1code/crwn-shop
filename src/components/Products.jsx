import React, { useContext, useEffect, useMemo, useState } from "react";
import { LoaderContext } from "../context/loader-context";
import Loader from "./Loader";
import Pagination from "./Pagination";
import Product from "./Product";

let PageSize = 6;

const Products = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useContext(LoaderContext);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 container mt-20 mb-3">
        {currentTableData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-7 mx-auto">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Products;
