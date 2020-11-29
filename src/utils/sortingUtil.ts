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

export const quickSort = (arr: number[], low: number, high: number, animations: any) =>{ //mergsorthelper
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

const partition = (arr: number[], low: number, high: number, animations: any) =>{ //domerge
    let pivot = arr[Math.floor((low + high)/2)];
    let i = low;
    let j = high;
   while (i <= j){
       while(arr[i] < pivot){
           animations.push([i, arr[i]]);
           i++;
       }
       while(arr[j] > pivot){
           animations.push([i, arr[j]]);
           j--;
       }
       if(i <= j){
           swap(arr, i, j);
           i++;
           j--;
       }
   }
   return i;
}