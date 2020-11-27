import React, { useEffect, useState } from "react";
import { random } from "../../utils/utils";
import "./MergingVisualizer.css";
import {
  mergeInSortedOrder,
  mergeInSortedOrderWithNoDuplicate,
} from "../../utils/MergingUtil";
import { ArrayItem } from "./ArrayItem";
import { MergedArrayItem } from "./MergedArrayItem";

export const MergingVisualizer: React.FC = () => {
  const [arrayOne, setArrayOne] = useState<number[]>([]);
  const [arrayTwo, setArrayTwo] = useState<number[]>([]);
  const [mergedArray, setMergedArray] = useState<number[]>([]);
  const [displayArray, setDisplayArray] = useState<number[]>([]);

  useEffect(() => {
    setArrayOne(resetArray);
    setArrayTwo(resetArray);
  }, []);

  const resetArray = () => {
    const arr: number[] = [];
    for (let i = 0; i < 15; i++) {
      arr.push(random(1, 20));
    }
    arr.sort((a, b) => a - b);
    return arr;
  };
  const mergeArray = () => {
    setMergedArray([]);
    setDisplayArray([]);
    setMergedArray(mergeInSortedOrder(arrayOne, arrayTwo));
  };
  const mergeArrayNoDuplicates = () => {
    setMergedArray([]);
    setDisplayArray([]);
    setMergedArray(mergeInSortedOrderWithNoDuplicate(arrayOne, arrayTwo));
  };

  return (
    <div className="merging-container">
      <ArrayItem name="array-one" array={arrayOne} />
      <ArrayItem name="array-two" array={arrayTwo} />
      <MergedArrayItem
        name="merged-array"
        mergedArr={mergedArray}
        displayArray={displayArray}
        setDisplayArray={setDisplayArray}
      />
      <div className="btn-merge">
        <button
          onClick={() => {
            setArrayOne(resetArray());
            setArrayTwo(resetArray());
            setMergedArray([]);
            setDisplayArray([]);
          }}
        >
          New Array
        </button>
        <button onClick={() => mergeArray()}>Merge</button>
        <button onClick={() => mergeArrayNoDuplicates()}>
          Merge with no Dupes
        </button>
      </div>
    </div>
  );
};
