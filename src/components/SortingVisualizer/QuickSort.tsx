import React, { useEffect, useState } from "react";
import { CreateRandomArrayForSort, sortAnimation } from "../../utils/utils";
import { getQuickSortAnimations } from "../../algorithms/QuickSort";
import { SortVisualizer } from "./SortVisualizer";

export const QuickSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    sortAnimation(animations);
  };

  return (
    <SortVisualizer
      array={array}
      setArray={setArray}
      sort={quickSort}
      sortName="Quick Sort"
    />
  );
};
