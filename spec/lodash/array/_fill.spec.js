import _ from 'lodash';

describe('_.fill spec', function () {

    it('should fill array with one value - default behaviour', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.fill(array, 'a');

        // then
        expect(result).toEqual(['a', 'a', 'a']);
    });

    it('should fill array with one value for not defined elements', function () {
        // given
        const array = Array(3);

        // when
        const result = _.fill(array, 2);

        // then
        expect(result).toEqual([2, 2, 2]);
    });

    it('should be used the same reference for array when fill method is used', function () {
        // given
        const array = Array(3);

        // when
        const result1 = _.fill(array, 1);
        const result2 = _.fill(array, 'a');

        // then
        expect(result1).toEqual(['a', 'a', 'a']);
        expect(result2).toEqual(['a', 'a', 'a']);
    });


    it('should fill array with one value - starting and ending points', function () {
        // given
        const array1 = [4, 6, 8, 10];
        const array2 = [4, 6, 8, 10, 12];

        // when
        const result1 = _.fill(array1, '*', 1, 3);
        const result2 = _.fill(array2, '*', 1, 3);

        // then
        expect(result1).toEqual([4, '*', '*', 10]);
        expect(result2).toEqual([4, '*', '*', 10, 12]);
    });
});