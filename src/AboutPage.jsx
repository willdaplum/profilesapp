import NavBar from "./NavBar.jsx";
import ProductInfo from "./ProductInfo.jsx";
import SvgElement from "./SvgElement.jsx";
import FaqAccordion from "./FaqAccordion.jsx";

export default function AboutPage() {
  const title = "About Stream-App";
  return (
    <>
      <SvgElement />
      <NavBar />
      <div className="b-example-divider"></div>
      <div className="container px-4 pt-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">{title}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <ProductInfo
              title="Eliminate indecision"
              description="No digging required to find a quality film."
              iconName="play-circle-fill"
            />
            <ProductInfo
              title="Connect with friends"
              description="Watch the same film as family and friends around the world."
              iconName="heart-fill"
            />
            <ProductInfo
              title="Pay less"
              description="Don't pay for a bloated catalog you'll never watch."
              iconName="cash-stack"
            />
            <ProductInfo
              title="Support filmmakers"
              description="The creatives behind films you love get paid with every stream."
              iconName="palette-fill"
            />
            <ProductInfo
              title="Ad-Free commitment"
              description="No ads on Stream-App. Ever."
              iconName="badge-ad-fill"
            />
            <ProductInfo
              title="Share the experience"
              description="Easy sharing integration with Letterboxd, Instagram, TikTok, etc."
              iconName="share-fill"
            />
            <ProductInfo
              title="People, not algorithms"
              description="Film lovers, not watchtime-maximizing algrithms drive content."
              iconName="people-fill"
            />
            <ProductInfo
              title="Mission driven"
              description="We are a worker coop focused on user experience, not shareholders and growth."
              iconName="emoji-smile-fill"
            />

          {/*[...Array(8)].map((e, i) => (
            <ProductInfo
              title="Featured title"
              description="Paragraph of text beneath the heading to explain the heading."
              iconName="bootstrap"
            />
          ))*/}
        </div>
      </div>
      <div className="container">
        <FaqAccordion />
      </div>
    </>
  );
}
