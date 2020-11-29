import { mergeInSortedOrder, mergeInSortedOrderWithNoDuplicate} from '../utils/MergingUtil';
import { createRandomArray } from '../utils/utils';

const arr1 = createRandomArray(15, 1, 20).sort((a, b) => a - b);
const arr2 = createRandomArray(15, 1, 20).sort((a, b) => a - b);

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeUnique(): R;
        }
    }
}

expect.extend({
    toBeUnique(arr:number[]){
        const set = Array.from(new Set(arr));
        if(arr.length === set.length){
            return {
                message: ()=> 'unique',
                pass: true,
            };
        }else{
            return {
                message: ()=> 'not unique',
                pass: false,
            };
        }
    }
})

describe('mergeInSortedOrder()', ()=>{
    it('properly merges', ()=>{
        expect(mergeInSortedOrder(arr1,arr2)).toBeTruthy();
    });
    it('returns something', ()=>{
        expect(mergeInSortedOrder(arr1,arr2)).not.toBeNull();
    })
});

describe("mergeInSortedOrderWithNoDuplicate()", () => {
    it('properly merges', ()=>{
        expect(mergeInSortedOrderWithNoDuplicate(arr1,arr2)).toBeTruthy();
    });
    it('returns something', ()=>{
        expect(mergeInSortedOrderWithNoDuplicate(arr1,arr2)).not.toBeNull();
    });
    it('contains unique numbers', ()=>{
        expect(mergeInSortedOrderWithNoDuplicate(arr1,arr2)).toBeUnique();
    })
});
