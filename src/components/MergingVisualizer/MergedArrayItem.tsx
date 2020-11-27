import React, { useEffect } from "react";
import { formatName } from "../../utils/utils";
interface MergedArrayItemProps {
  name: string;
  mergedArr: number[];
  displayArray: number[];
  setDisplayArray: React.Dispatch<React.SetStateAction<number[]>>;
}

export const MergedArrayItem: React.FC<MergedArrayItemProps> = ({
  name,
  mergedArr,
  displayArray,
  setDisplayArray,
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
        await delay(500);
        setDisplayArray((arr: number[]) => [...arr, el]);
      }
    })();
  }, [mergedArr, setDisplayArray]);
  return (
    <div className={name}>
      {`${formatName(name)}: `}
      {displayArray.map((item, index) => (
        <div className="array-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
