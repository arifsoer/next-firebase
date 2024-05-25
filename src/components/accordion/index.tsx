import { FC, useRef, useState } from "react";

import style from "./accordion.module.scss";

type TAccordionItemProps = {
  title: string;
  content: string;
  isActive?: boolean;
  key?: string;
  onItemClick?: (key: string) => void;
};

type TAccorddionComponentProps = {
  items: TAccordionItemProps[];
};

const AccordionItem: FC<TAccordionItemProps> = ({
  title,
  content,
  isActive = false,
  key,
  onItemClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <li className={style.accordion_item}>
      <div className={style.title_item}>
        <button
          onClick={() => {
            console.log("onClick", title);
            if (onItemClick) onItemClick(title);
          }}
        >
          +
        </button>
        <p>{title}</p>
      </div>
      <div
        ref={contentRef}
        className={style.content_item}
        style={{
          height: isActive ? "auto" : 0,
          padding: isActive ? "0.5rem" : 0,
        }}
      >
        <p>{content}</p>
      </div>
    </li>
  );
};

const AccordionComponent: FC<TAccorddionComponentProps> = ({ items }) => {
  const [indexActive, setIndexActive] = useState("");
  console.log("active index ", indexActive);
  return (
    <>
      <ul className={style.accordion}>
        {items.map((item) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            isActive={indexActive === item.title}
            onItemClick={(key) => setIndexActive(key)}
          />
        ))}
      </ul>
    </>
  );
};

export default AccordionComponent;
