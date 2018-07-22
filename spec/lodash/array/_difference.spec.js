import _ from 'lodash';

describe('_.difference spec', function () {

    it('should get difference between two sets stored in arrays', function () {
        // given
        let array1 = [2, 1];
        let array2 = [2, 3];

        // when
        let result = _.difference(array1, array2);

        // then
        expect(result).toEqual([1]);
    });

    it('should return empty set because first set is empty', function () {
        // given
        let array1 = [];
        let array2 = [1, 2, 3];

        // when
        let result = _.difference(array1, array2);

        // then
        expect(result).toEqual([]);
    });

    it('should return whole first set because second set is empty', function () {
        // given
        let array1 = [1, 2, 3];
        let array2 = [];

        // when
        let result = _.difference(array1, array2);

        // then
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return whole first set because second set hasn\'t got any of elements from first set', function () {
        // given
        let array1 = [1, 2, 3];
        let array2 = [4, 5];

        // when
        let result = _.difference(array1, array2);

        // then
        expect(result).toEqual([1, 2, 3]);
    });
});