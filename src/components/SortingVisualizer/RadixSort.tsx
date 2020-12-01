import React, { useEffect, useState } from "react";
import { getRadixSortAnimations } from "../../algorithms/radixSort";
import { SortVisualizer } from "./SortVisualizer";
import { CreateRandomArrayForSort, sortAnimation } from "../../utils/utils";

export const RadixSort: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(CreateRandomArrayForSort);
  }, []);

  const radixSort = () => {
    const animations = getRadixSortAnimations(array);
    sortAnimation(animations);
  };
  return (
    <SortVisualizer
      array={array}
      setArray={setArray}
      sort={radixSort}
      sortName="Radix Sort"
    />
  );
};
