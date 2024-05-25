"use client";

import { FC } from "react";
import Form from "react-bootstrap/Form";

type TSelectItem<T = string> = {
  title: string;
  value: T;
};

type TSelectProps<V = string> = {
  items: TSelectItem<V>[];
  defaultValue?: V;
  onChange?: (value: V) => void;
  disabled?: boolean;
};

const SelectComp: FC<TSelectProps> = ({
  items,
  onChange,
  defaultValue,
  disabled = false,
}) => {
  return (
    <>
      <Form.Select
        onChange={(value) => {
          if (onChange) onChange(value.target.value);
        }}
        disabled={disabled}
      >
        <option value={""}>Select</option>
        {items.map((item) => (
          <option
            key={item.value}
            value={item.value}
            selected={item.value === defaultValue}
          >
            {item.title}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectComp;
