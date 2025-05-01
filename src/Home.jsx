import { Button } from "@aws-amplify/ui-react";
import Poster from "./Poster.jsx";
import ProductInfo from "./ProductInfo.jsx";
import NavBar from "./NavBar.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="d-flex flex-row align-items-center gap-5">
          <div className="d-flex flex-column align-items-center">
            <ProductInfo />
            <ProductInfo />
            <ProductInfo />
            <ProductInfo />
          </div>
          <div>
            <Poster />
          </div>
        </div>
      </div>
    </>
  );
}
