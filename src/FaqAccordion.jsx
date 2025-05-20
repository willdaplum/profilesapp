import AccordionItem from "./AccordionItem.jsx";

export default function FaqAccordion() {
  const ids = [1, 2, 3, 4];
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {ids.map((id) => (
      <AccordionItem key={id.id} idNum={id} parentId="accordionFlushExample"/>
      ))}
    </div>
  );
}
