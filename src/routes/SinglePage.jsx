import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getitem = async () => {
      const res = await fetch("https://fakestoreapi.com/products/" + id);

      if (!res.ok) {
        throw new Error("Sonething went wrong!");
      }

      const data = await res.json();

      setData(data);
    };

    getitem();
  }, []);

  return <div>
    <h3>{data.title}</h3>
    <h3>{data.description}</h3>
    <img width={300} height={300} src={data.image} alt={data.title} />
    <p>{data.price}</p>
  </div>;
};

export default SinglePage;
