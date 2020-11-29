import React, { useEffect, useState } from "react";
import { createRandomArray } from "../../utils/utils";
import "./MergingVisualizer.css";
import {
  mergeInSortedOrder,
  mergeInSortedOrderWithNoDuplicate,
} from "../../algorithms/MergingSortedArrays";
import { ArrayItem } from "./ArrayItem";
import { MergedArrayItem } from "./MergedArrayItem";

const createRandomArrayForMerge = () => {
  return createRandomArray(15, 1, 20).sort((a, b) => a - b);
};
export const MergingVisualizer: React.FC = () => {
  const [arrayOne, setArrayOne] = useState<number[]>([]);
  const [arrayTwo, setArrayTwo] = useState<number[]>([]);
  const [mergedArray, setMergedArray] = useState<number[]>([]);
  const [displayArray, setDisplayArray] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    setArrayOne(createRandomArrayForMerge);
    setArrayTwo(createRandomArrayForMerge);
  }, []);

  const mergeArray = () => {
    setDisabled(!disabled);
    setMergedArray([]);
    setDisplayArray([]);
    setMergedArray(mergeInSortedOrder(arrayOne, arrayTwo));
  };
  const mergeArrayNoDuplicates = () => {
    setDisabled(!disabled);
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
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <div className="btn-merge">
        <button
          onClick={() => {
            setArrayOne(createRandomArrayForMerge);
            setArrayTwo(createRandomArrayForMerge);
            setMergedArray([]);
            setDisplayArray([]);
          }}
        >
          New Array
        </button>
        <button onClick={() => mergeArray()} disabled={disabled}>
          Merge
        </button>
        <button onClick={() => mergeArrayNoDuplicates()} disabled={disabled}>
          Merge with no Dupes
        </button>
      </div>
    </div>
  );
};
