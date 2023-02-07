import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { LoaderContext } from "../context/loader-context";

const SinglePage = () => {
  const {loading, setLoading} = useContext(LoaderContext)
  const { id } = useParams();
  const [data, setData] = useState({});
  const [rating, setRating] = useState({})

  useEffect(() => {
    const getitem = async () => {
      const res = await fetch("https://fakestoreapi.com/products/" + id);

      if (!res.ok) {
        throw new Error("Sonething went wrong!");
      }

      const data = await res.json();
      console.log(data);
      setLoading(false)

      const list = Object.keys(data.rating).reduce((acc, key) => {
        acc[key] = data.rating[key];
        return acc;
      }, {});
      setRating(list)

      setData(data);
    };

    getitem();
  }, []);

  if(loading){
    return <Loader />
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <h3>{data.description}</h3>
      <img width={300} height={300} src={data.image} alt={data.title} />
      <p>{data.price}</p>
      <p>{rating.count}</p>
      <p>{rating.rate}</p>
    </div>
  );
};

export default SinglePage;
