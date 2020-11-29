import React, { useEffect, useState } from "react";
import { createRandomArray } from "../../utils/utils";
import "./SortingVisualizer.css";
import { getQuickSortAnimations } from "../../algorithms/QuickSort";
import { getMergeSortAnimations } from "../../algorithms/MergeSort";
import { getHeapSortAnimations } from "../../algorithms/HeapSort";

const CreateRandomArrayForSort = () => {
  return createRandomArray(100, 5, 300);
};

export const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    sortAnimation(animations);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    sortAnimation(animations);
  };
  const heapSorte = () => {
    const arr = [6, 4, 8, 3, 7, 4, 7, 8, 3, 7, 9];
    getHeapSortAnimations(arr);
    console.log(arr);
  };

  const sortAnimation = (animations: any) => {
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
      <button
        onClick={() => {
          mergeSort();
        }}
      >
        Merge Sort
      </button>
      <button onClick={() => heapSorte()}>Heap Sort</button>
    </div>
  );
};
