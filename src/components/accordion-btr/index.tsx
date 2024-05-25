import { FC, ReactNode } from "react";
import { Accordion } from "react-bootstrap";

export type TItemAccordionBtr = {
  title: string;
  content: ReactNode;
};

type TAccodionBtrProps = {
  items: TItemAccordionBtr[];
};

const AccordionBtr: FC<TAccodionBtrProps> = ({ items }) => {
  return (
    <>
      <Accordion>
        {items.map((it, ind) => (
          <Accordion.Item key={ind} eventKey={ind.toString()}>
            <Accordion.Header>{it.title}</Accordion.Header>
            <Accordion.Body>{it.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionBtr;
