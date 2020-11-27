import { mergeInSortedOrder, mergeInSortedOrderWithNoDuplicate} from '../utils/MergingUtil';

const arr1 = [1,1,2,3,4,4,5,8,8,9,9,10];
const arr2 = [3,3,4,5,6,7,8,9,9,9,10,11];

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeUnique(): CustomMatcherResult
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
