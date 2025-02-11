import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "../styles/products.css";

const categories = ["salons", "accessories", "chairs", "lamps"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("salons");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ State for Modal
  const sliderRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        console.log("📡 Fetching products for category:", selectedCategory);

        const categoryRef = doc(db, "products", selectedCategory);
        const categorySnapshot = await getDoc(categoryRef);

        if (categorySnapshot.exists()) {
          console.log("📂 Firestore data:", categorySnapshot.data());

          const data = categorySnapshot.data();
          const productsData = Object.entries(data).map(([name, details]) => ({
            id: name,
            description: details?.description || "No description available",
            image: formatGoogleDriveLink(details?.image),
          }));

          console.log("✅ Parsed products:", productsData);
          if (isMounted) setProducts(productsData);
        } else {
          console.warn("⚠️ No products found for category:", selectedCategory);
          if (isMounted) setProducts([]);
        }
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
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

  // ✅ Scroll Functions
  const scrollAmount = 300;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // ✅ Auto Scroll Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="products-section">
      <h2 className="products-title">Our Products</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Slider Container */}
      <div className="slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>❮</button>
        <div className="products-slider" ref={sliderRef}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.id} className="product-image" />
              </div>
              <div className="product-info">
                <h3>{product.id}</h3>
                <button className="view-details" onClick={() => setSelectedProduct(product)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>❯</button>
      </div>

      {/* ✅ Modal Popup */}
      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedProduct(null)}>✖</span>
            <img src={selectedProduct.image} alt={selectedProduct.id} className="modal-image" />
            <h3>{selectedProduct.id}</h3>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
