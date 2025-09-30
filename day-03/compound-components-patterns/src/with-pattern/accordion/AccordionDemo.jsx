import Accordion from "./Accordion";

export default function AccordionDemo() {
  return (
    <Accordion>
      <Accordion.Item title="What is Compound Component Pattern?">
        It’s a React pattern that allows parent and child components to work
        together seamlessly while giving developers flexible composition.
      </Accordion.Item>

      <Accordion.Item title="Why use it?">
        It makes UI libraries like modals, tabs, accordions, menus, etc. easier
        to build and use.
      </Accordion.Item>

      <Accordion.Item title="Pitfalls?">
        Overusing it can lead to deeply nested structures or make things harder
        to debug if not documented well.
      </Accordion.Item>
    </Accordion>
  );
}