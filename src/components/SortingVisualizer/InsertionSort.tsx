import React, { useState, useEffect } from "react";
import { getInsertionSortAnimation } from "../../algorithms/InsertionSort";
import { CreateRandomArrayForSort, sortAnimation } from "../../utils/utils";
import { SortVisualizer } from "./SortVisualizer";

export const InsertionSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  const insertionSort = () => {
    const animations = getInsertionSortAnimation(array);
    sortAnimation(animations);
  };

  return (
    <SortVisualizer
      array={array}
      setArray={setArray}
      sort={insertionSort}
      sortName="Insertion Sort"
    />
  );
};
