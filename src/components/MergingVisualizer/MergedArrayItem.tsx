import React, { useEffect } from "react";
interface MergedArrayItemProps {
  mergedArr: number[];
  displayArray: number[];
  setDisplayArray: React.Dispatch<React.SetStateAction<number[]>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MergedArrayItem: React.FC<MergedArrayItemProps> = ({
  mergedArr,
  displayArray,
  setDisplayArray,
  setDisabled,
}) => {
  const delay = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(0);
      }, ms);
    });
  };
  useEffect(() => {
    (async () => {
      for (let el of mergedArr) {
        await delay(200);
        setDisplayArray((arr: number[]) => [...arr, el]);
      }
      setDisabled(false);
    })();
  }, [mergedArr, setDisplayArray, setDisabled]);
  return (
    <div className="merged-array-container">
      {displayArray.map((item, index) => (
        <div className="array-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
