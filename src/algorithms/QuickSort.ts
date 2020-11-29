export const getQuickSortAnimations = (arr: number[])=>{
    const animations: any = [];
    if(arr.length <=1) return arr;
    quickSort(arr, 0, arr.length-1, animations);
    return animations;
}

const swap = (arr: number[], low: number, high: number)=>{
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
}

const partition = (arr: number[], low: number, high: number, animations: any) =>{
    let pivot = arr[Math.floor((low + high)/2)];
    let i = low;
    let j = high;
   while (i <= j){
       while(arr[i] < pivot){
           i++;
       }
       while(arr[j] > pivot){
           j--;
       }
       if(i <= j){
           swap(arr, i, j);
           animations.push([i, arr[i]])
           animations.push([j, arr[j]])
           i++;
           j--;
       }
   }
   return i;
}

export const quickSort = (arr: number[], low: number, high: number, animations: any) =>{
    let index;
    if(arr.length > 1){
        index = partition(arr, low, high, animations);
        if(low < index-1){
            quickSort(arr, low, index-1, animations);
        }
        if(index < high){
            quickSort(arr, index, high, animations);
        }
    }
    return arr;
}