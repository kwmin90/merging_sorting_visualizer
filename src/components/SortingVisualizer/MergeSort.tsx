import React, { useEffect, useState } from "react";
import { createRandomArray, sortAnimation } from "../../utils/utils";
import { getMergeSortAnimations } from "../../algorithms/MergeSort";
import { SortVisualizer } from "./SortVisualizer";

const CreateRandomArrayForSort = () => {
  return createRandomArray(110, 5, 350);
};

export const MergeSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    sortAnimation(animations);
  };

  return (
    <SortVisualizer
      array={array}
      setArray={setArray}
      sort={mergeSort}
      sortName="Merge Sort"
      createRandom={CreateRandomArrayForSort}
    />
  );
};
