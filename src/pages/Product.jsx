import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const deleteHandler = (id) => {
    setProducts((prev) => {
      return prev.filter((singleProduct) => singleProduct.id !== id);
    });
  };
  return (
    <div>
      <div>
        {products.map((singleProduct, key) => {
          return (
            <div className="flex items-center justify-between" key={key}>
              <p>{singleProduct.title}</p>
              <button onClick={() => deleteHandler(singleProduct.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setProduct(event.target.value)}
        />
        <button
          onClick={() =>
            setProducts([...products, { title: product, id: Math.random() }])
          }
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Product;
