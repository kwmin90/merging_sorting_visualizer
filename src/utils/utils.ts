const random = (min: number, max: number) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const formatName = (name: string)=>{
    const temp = name.replace('-', ' ').split(' ').map((x)=> x.charAt(0).toUpperCase() + x.substring(1)).join(' ');
    return temp;
}

export const createRandomArray = (numOfElements: number, min: number, max: number ) => {
    const arr: number[] = [];
    for (let i = 0; i < numOfElements; i++) {
      arr.push(random(min, max));
    }
    return arr;
  };