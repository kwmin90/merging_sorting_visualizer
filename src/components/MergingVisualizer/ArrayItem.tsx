import React from "react";
import { formatName } from "../../utils/utils";

interface ArrayItemProps {
  name: string;
  array: number[];
}

export const ArrayItem: React.FC<ArrayItemProps> = ({ name, array }) => {
  return (
    <div className={name}>
      {`${formatName(name)}: `}
      {array.map((item, index) => (
        <div className="array-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
