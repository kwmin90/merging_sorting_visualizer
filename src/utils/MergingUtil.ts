export const mergeInSortedOrder = (arr1: number[], arr2: number[]) =>{
    let temp = [];
    let i = 0, j = 0, curr = 0;
    while(curr < (arr1.length + arr2.length)){
        let isArr1Depleted = i >= arr1.length;
        let isArr2Depleted = j >= arr2.length;
        if(!isArr1Depleted && (isArr2Depleted || (arr1[i] < arr2[j]))){
            temp[curr] = arr1[i];
            i++;
        }else{
            temp[curr] = arr2[j];
            j++;
        }
        curr++;
    }
    return temp;
}

export const mergeInSortedOrderWithNoDuplicate = (arr1:number[],arr2:number[] ) =>{
    let temp = [];
    let i = 0, j = 0, curr = 0;
    while(curr < (arr1.length + arr2.length)){
        let isArr1Depleted = i >= arr1.length;
        let isArr2Depleted = j >= arr2.length;
        if(!isArr1Depleted && (isArr2Depleted || arr1[i] === arr2[j])){
            temp[curr] = arr1[i];
            i++;
            j++;
        }
        else if(!isArr1Depleted && (isArr2Depleted || arr1[i] < arr2[j])){
            temp[curr] = arr1[i];
            i++;
        }else{
            temp[curr] = arr2[j];
            j++;
        }
        if(temp[curr] === temp[curr-1]){
            temp.pop();
            curr--;
        }
        if(temp[curr] === undefined){
            temp.pop();
            break;
        }
        curr++;
    }
    return temp;
}