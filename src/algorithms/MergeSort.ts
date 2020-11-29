//credits to Clement Mihailescu
//https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial



export const getMergeSortAnimations = (arr: number[]) =>{
    const animations: any = [];
    if(arr.length <=1) return arr;
    const auxArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length-1, auxArr, animations);
    return animations;
}

const mergeSortHelper = (arr: number[], start: number, end: number, auxArr: number[], animations: any) =>{
    if(start === end) return;
    const middle = Math.floor((start + end)/2);
    mergeSortHelper(auxArr, start, middle, arr, animations);
    mergeSortHelper(auxArr, middle+1, end, arr, animations);
    mergeSort(arr, start, middle, end, auxArr, animations);
}

const mergeSort = (arr:number[], start: number, middle: number, end: number, auxArr: number[], animations: any) =>{
    let k = start;
    let i = start;
    let j = middle + 1;

    while(i <= middle && j <= end){
        if(auxArr[i] <= auxArr[j]){
            animations.push([k, auxArr[i]]);
            arr[k++] = auxArr[i++];
        }else{
            animations.push([k, auxArr[j]]);
            arr[k++] = auxArr[j++];
        }
    }
    while (i <= middle){
        animations.push([k, auxArr[i]]);
        arr[k++] = auxArr[i++];
    }
    while(j <= end){
        animations.push([k, auxArr[j]]);
        arr[k++] = auxArr[j++];
    }
}

export const mergeSortHelperForTest = (arr: number[], start: number, end: number, auxArr: number[]) =>{
    if(start === end) return;
    const middle = Math.floor((start + end)/2);
    mergeSortHelperForTest(auxArr, start, middle, arr);
    mergeSortHelperForTest(auxArr, middle+1, end, arr);
    mergeSortForTest(arr, start, middle, end, auxArr);
    return arr;
}

const mergeSortForTest = (arr:number[], start: number, middle: number, end: number, auxArr: number[]) =>{
    let k = start;
    let i = start;
    let j = middle + 1;

    while(i <= middle && j <= end){
        if(auxArr[i] <= auxArr[j]){
            arr[k++] = auxArr[i++];
        }else{
            arr[k++] = auxArr[j++];
        }
    }
    while (i <= middle){
        arr[k++] = auxArr[i++];
    }
    while(j <= end){
        arr[k++] = auxArr[j++];
    }
}