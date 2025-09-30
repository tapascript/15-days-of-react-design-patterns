import { useState } from "react";

function Accordion({ children }) {
  return <div className="accordion">{children}</div>;
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

// Attach subcomponents
Accordion.Item = AccordionItem;

export default Accordion;