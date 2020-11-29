const random = (min: number, max: number) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const formatName = (name: string)=>{
    const temp = name.replace('-', ' ').split(' ').map((x)=> x.charAt(0).toUpperCase() + x.substring(1)).join(' ');
    return temp;
}

const createRandomArray = (numOfElements: number, min: number, max: number ) => {
    const arr: number[] = [];
    for (let i = 0; i < numOfElements; i++) {
      arr.push(random(min, max));
    }
    return arr;
  };

export const createRandomArrayForMerge = () => {
    return createRandomArray(21, 1, 20).sort((a, b) => a - b);
  };

export const CreateRandomArrayForSort = () => {
    return createRandomArray(110, 5, 400);
  };
export const sortAnimation = (animations: any) => {
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