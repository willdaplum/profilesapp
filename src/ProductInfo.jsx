export default function ProductInfo({title, description, iconName}) {
  {/*const title = "Featured title";
  const description =
    "Paragraph of text beneath the heading to explain the heading.";*/}
  return (
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
        aria-hidden="true"
      >
        <use xlinkHref={"#" + iconName}></use>
      </svg>
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
