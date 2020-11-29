import React, { useEffect, useState } from "react";
import { createRandomArray } from "../../utils/utils";
import "./SortingVisualizer.css";
import { quickSort, getQuickSortAnimations } from "../../utils/sortingUtil";

const CreateRandomArrayForSort = () => {
  return createRandomArray(100, 5, 300);
};

export const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  // const isSorted = () => {
  //   const temp = quickSort(array, 0, array.length - 1);
  //   const temp2 = array.sort((a, b) => a - b);
  //   if (temp === temp2) {
  //     console.log("quicksort works!");
  //   }
  // };
  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrBars = Array.from(
        document.getElementsByClassName(
          "array-bar"
        ) as HTMLCollectionOf<HTMLElement>
      );
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * 10);
    }
  };

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
      <button
        onClick={() => {
          setArray(CreateRandomArrayForSort);
        }}
      >
        New Array
      </button>
      <button
        onClick={() => {
          quickSort();
        }}
      >
        Quick Sort
      </button>
    </div>
  );
};
