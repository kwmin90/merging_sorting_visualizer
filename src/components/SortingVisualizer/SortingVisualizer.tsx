import React, { useEffect, useState } from "react";
import { createRandomArray } from "../../utils/utils";
import "./SortingVisualizer.css";

export const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(createRandomArray(100, 5, 300));
  }, []);
  return (
    <div className="sorting-container">
      {array.map((value: number, index: number) => (
        <div
          className="array-bar"
          key={index}
          style={{
            backgroundColor: "red",
            height: `${value}px`,
          }}
        ></div>
      ))}
    </div>
  );
};
