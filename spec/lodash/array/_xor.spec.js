import _ from 'lodash';

describe('_.xor spec', function () {

    it('should create symmetric difference of given arrays', function () {
        // given
        const array1 = [2, 1];
        const array2 = [2, 3, 4];
        const array3 = [2, 4, 3];
        const array4 = [];
        const array5 = [2, 1];
        const array6 = [1, 2];

        // when
        const result1 = _.xor(array1, array2);
        const result2 = _.xor(array1, array3);
        const result3 = _.xor(array1, array4);
        const result4 = _.xor(array1, array5);
        const result5 = _.xor(array1, array6);

        // then
        expect(result1).toEqual([1, 3, 4]);
        expect(result2).toEqual([1, 4, 3]);
        expect(result3).toEqual([2, 1]);
        expect(result4).toEqual([]);
        expect(result5).toEqual([]);
    });
});