import { quickSortForTest } from '../algorithms/QuickSort';
import { mergeSortHelperForTest } from '../algorithms/MergeSort';
import { insertionSortForTest } from '../algorithms/InsertionSort';
import { CreateRandomArrayForSort } from '../utils/utils';

const array = CreateRandomArrayForSort();
const auxArr = array.slice();

declare global {
    namespace jest {
        interface Matchers<R>{
            toSortProperly(): R;
        }
    }
}

expect.extend({
    toSortProperly(arr: number[]){
        const temp = array.sort((a,b)=>a-b);
        if(arr === temp){
            return{
                message: ()=> 'sorted',
                pass: true,
            };
        }else{
            return {
                message: ()=> 'not sorted',
                pass: false,
            };
        }
    }
})

describe('quickSort', ()=>{
    it('sorts properly', ()=>{
        expect(quickSortForTest(array, 0, array.length-1)).toSortProperly();
    })
});
describe('mergeSort', ()=>{
    it('sorts properly', ()=>{
        expect(mergeSortHelperForTest(array, 0, array.length-1, auxArr)).toSortProperly();
    })
});
describe('insertionSort', ()=>{
    it('sorts properly', ()=>{
        expect(insertionSortForTest(array)).toSortProperly();
    })
});