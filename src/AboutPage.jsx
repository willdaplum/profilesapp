import NavBar from "./NavBar.jsx";
import ProductInfo from "./ProductInfo.jsx";
import SvgElement from "./SvgElement.jsx";
import FaqAccordion from "./FaqAccordion.jsx";

export default function AboutPage() {
  return (
    <>
      <SvgElement />
      <NavBar />
      <div className="b-example-divider"></div>
      <div className="container px-4 pt-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Icon grid</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
          <ProductInfo />
        </div>
      </div>
      <div className="container"><FaqAccordion /></div>
      
    </>
  );
}
