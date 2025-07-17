import AccordionItem from "./AccordionItem.jsx";
import { supabase } from "./supabaseClient";
import { useState, useEffect } from "react";

export default function FaqAccordion() {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchFaqItems = async () => {
      const { data, error } = await supabase
        .from("faq")
        .select("id, question, answer");
      if (error) {
        setError("Failed to fetch product information.");
      } else {
        setFaqItems(data || []);
      }
    };

    fetchFaqItems();
  }, []);

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqItems.map((faqItem) => (
        <AccordionItem
          key={faqItem.id}
          idNum={faqItem.id}
          question={faqItem.question}
          answer={faqItem.answer}
          parentId="accordionFlushExample"
        />
      ))}
    </div>
  );
}
