export const getInsertionSortAnimation = (arr:number[]) =>{
    const animations: any = [];
    if(arr.length <=1) return arr;
    insertionSort(arr, animations);
    return animations;
}
// export const getInsertionSortAnimation = (arr:number[])=>{
//     return insertionSort(arr);
// }
const insertionSort = (arr: number[], animations: any)=>{
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let curr = arr[i];
        let j = i-1;
        while(j>-1 && curr < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
        animations.push([i, curr])
    }
    return arr;
}