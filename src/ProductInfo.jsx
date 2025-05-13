export default function ProductInfo() {
  const title = "Featured title";
  const description =
    "Paragraph of text beneath the heading to explain the heading.";
  return (
      <div className="col d-flex align-items-start">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
          </svg>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}
