export const getRadixSortAnimations = (arr: number[]) =>{
    const animations: any = [];
    if(arr.length<=1) return arr;
    radixSort(arr, animations);
    return animations;
}

const getNum = (num: number, index: number)=>{
    const strNum = String(num);
    let end = strNum.length-1;
    const foundNum = strNum[end - index];
    if(foundNum === undefined) return 0;
    else return foundNum;
}

const largestNum = (arr: number[]) =>{
    let largest = '0';
    arr.forEach(num =>{
        const strNum = String(num);
        if(strNum.length > largest.length) largest = strNum;
    });
    return largest.length;
}

const radixSort = (arr: number[], animations: any)=>{
    let maxLength=largestNum(arr);
    for(let i = 0; i < maxLength+1; i++){
        let buckets: any = Array.from({length: 10}, ()=>[]);
        for(let j = 0; j < arr.length; j++){
            let num: any = getNum(arr[j], i);
            console.log(num);
            if(num !== undefined){
                buckets[num].push(arr[j]);
                animations.push([j, arr[j]])
            }
        };
        arr = buckets.flat();
    }
    return arr;
}

export const radixSortForTest = (arr: number[])=>{
    let maxLength=largestNum(arr);
    for(let i = 0; i < maxLength+1; i++){
        let buckets: any = Array.from({length: 10}, ()=>[]);
        for(let j = 0; j < arr.length; j++){
            let num: any = getNum(arr[j], i);
            if(num !== undefined) buckets[num].push(arr[j]);
        };
        arr = buckets.flat();
    }
    return arr;
}