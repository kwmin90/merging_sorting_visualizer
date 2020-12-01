import React from "react";
import { CreateRandomArrayForSort } from "../../utils/utils";
import "./SortVisualizer.css";
interface SortingItemProps {
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  sort: () => void;
  sortName: string;
}

export const SortVisualizer: React.FC<SortingItemProps> = ({
  array,
  setArray,
  sort,
  sortName,
}) => {
  return (
    <div className="sorting-container">
      <div className="array-bar-container">
        <div className="array-bar-items">
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
      </div>
      <div className="btn-sort">
        <button
          disabled={false}
          onClick={() => {
            setArray(CreateRandomArrayForSort);
          }}
        >
          New Array
        </button>
        <button
          disabled={false}
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
