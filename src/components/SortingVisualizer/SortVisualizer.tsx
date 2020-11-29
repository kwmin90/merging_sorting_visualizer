import React from "react";
import "./SortVisualizer.css";

interface SortingItemProps {
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  sort: () => void;
  sortName: string;
  createRandom: () => number[];
}

export const SortVisualizer: React.FC<SortingItemProps> = ({
  array,
  setArray,
  sort,
  sortName,
  createRandom,
}) => {
  return (
    <div className="sorting-container">
      <div className="array-bar-container">
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
      <div className="btn-sort">
        <button
          onClick={() => {
            setArray(createRandom);
          }}
        >
          New Array
        </button>
        <button
          onClick={() => {
            sort();
          }}
        >
          {sortName}
        </button>
      </div>
    </div>
  );
};
