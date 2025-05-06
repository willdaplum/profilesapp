import { Button } from "@aws-amplify/ui-react";
import Poster from "./Poster.jsx";
import ProductInfo from "./ProductInfo.jsx";
import NavBar from "./NavBar.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex justify-content-center pt-3">
        <div className="d-flex flex-row align-items-start gap-5">
          <div>
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
