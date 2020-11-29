import React from "react";

interface ArrayItemProps {
  array: number[];
}

export const ArrayItem: React.FC<ArrayItemProps> = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((item, index) => (
        <div className="array-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
