import React, { useEffect, useState } from "react";
import ProductsShape from "../ProductsShape";
import axios from "axios";

function Bestsellingsectionone() {
    const [Bestsellerdata, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data)
          setData(response.data.slice(16,20));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div className="container">
          <div className="row">
           {Bestsellerdata.map((element, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <ProductsShape key={index} element={element} index={index} />

            </div>
        ))}
      </div>
      </div>
    );
}

export default Bestsellingsectionone
