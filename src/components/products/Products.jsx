import { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filerdata, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        setProduct(result.data);
        setFilteredData(result.data);
        //log products
        console.log(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const filter = (event) => {
    setFilteredData(product.filter((f)=> f.title.toLowercase().includes(event.target.value)))
  }

  if (loading) {
    return (
      <div>
        <Oval height="80" width="80" radius="9" color="grey" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="Product-header">
        <div className="product-title">
          <h1>Discover Products</h1>
        </div>
        <div className="filter-categories">
          <button className="btns-cate">men's Clothings</button>
          <button className="btns-cate">Jewelry</button>
          <button className="btns-cate">Electronics</button>
          <button className="btns-cate">Womens's Clothings</button>
        </div>
      </div>

      <div className="product-wrapper">
        {product.map((items) => (
          <div className="product-cards" key={items.id}>
            <div className="product-img">
              <img
                src={items.image}
                alt=""
              />
            </div>
            <div className="productname">
                <div className="title"> <h4>{ items.title}</h4> </div>
                <div className="price"> <p>${items.price }</p></div>

            </div>

            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
