import NavBar from "./NavBar.jsx";
import ProductInfo from "./ProductInfo.jsx";
import SvgElement from "./SvgElement.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("productInfo")
        .select("id, title, description, icon_name");
      if (error) {
        setError("Failed to fetch product information.");
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const title = "About Stream-App";
  return (
    <>
      <SvgElement />
      <NavBar />
      <div className="b-example-divider"></div>
      <div className="container px-4 pt-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">{title}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {products.map((product) => (
            <ProductInfo
              key={product.id}
              title={product.title}
              description={product.description}
              iconName={product.icon_name}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <FaqAccordion />
      </div>
    </>
  );
}
