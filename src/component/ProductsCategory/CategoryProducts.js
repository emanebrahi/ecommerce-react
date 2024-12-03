import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CategoryProducts() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryname } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const filtered = response.data.filter(
          (product) =>
            product.category.toLowerCase() === categoryname.toLowerCase()
        );
        setFilteredData(filtered);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryname]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="category-products">
        <h2>{categoryname}</h2>
        {filteredData.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          <div className="row">
            {filteredData.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "15px",
                    height:"400px"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      overflow:"hidden",
                      height:"120px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1rem",
                      marginTop: "10px",
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
