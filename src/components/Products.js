import React, { useEffect, useState, useRef, useCallback } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "../styles/products.css";

const categories = ["salons", "accessories", "chaises", "chaises_bureau", "lamps"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("chaises");
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryRef = doc(db, "products", selectedCategory);
      const categorySnapshot = await getDoc(categoryRef);
      if (categorySnapshot.exists()) {
        const data = categorySnapshot.data();
        const productsData = Object.entries(data).map(([name, details]) => ({
          id: name,
          image: formatGoogleDriveLink(details?.image),
          description: details?.description || "No description available.",
        }));
        setProducts(productsData);
      } else {
        setProducts([]);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const formatGoogleDriveLink = (url) => {
    if (!url) return "https://dummyimage.com/600x400/cccccc/000000&text=No+Image";
    if (url.includes("drive.google.com/uc?id=")) {
      const fileId = url.split("id=")[1].split("&")[0];
      return `https://lh3.googleusercontent.com/d/${fileId}=s1000`;
    }
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/d/")[1].split("/")[0];
      return `https://lh3.googleusercontent.com/d/${fileId}=s1000`;
    }
    return url;
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }, 3000);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  return (
    <section id="products" className="products-section">
      <h2 className="products-title">Our Exclusive Products</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div
        className="slider-container"
        ref={sliderRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-box">
              <img src={product.image} alt={product.id} className="product-image" />
              <h3 className="product-name">{product.id}</h3>
              <button className="view-details" onClick={() => setModalProduct(product)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalProduct && (
        <div className="modal-overlay" onClick={() => setModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalProduct(null)}>×</span>
            <h2 className="modal-title">{modalProduct.id}</h2>
            <img src={modalProduct.image} alt={modalProduct.id} className="modal-image" />
            <p className="modal-description">{modalProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
