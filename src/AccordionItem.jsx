export default function AccordionItem({ idNum, parentId, question, answer }) {
  const id = "flush-collapse" + idNum.toString();
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + id}
          aria-expanded="false"
          aria-controls={id}
        >
          {question}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent={"#" + parentId}
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}
