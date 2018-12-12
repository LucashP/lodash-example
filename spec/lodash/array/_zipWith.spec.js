import _ from 'lodash';

describe('_.zipWith spec', function () {

    it('should zip array according to zip strategy - same dimensions', function () {
        // given
        const array1 = [1, 2];
        const array2 = [10, 20];
        const array3 = [100, 200];

        // when
        const result1 = _.zipWith(array1, array2, array3, function (a, b, c) {
            return a + b + c;
        });
        const result2 = _.zipWith(array1, array2, array3, function (a, b, c) {
            return '' + a + b + c;
        });

        // then
        expect(result1).toEqual([111, 222]);
        expect(result2).toEqual(['110100', '220200']);
        expect(array1).toEqual([1, 2]);
    });

    it('should zip array according to zip strategy - different dimensions', function () {
        // given
        const array1 = [1, 2, 3];
        const array2 = [10, 20];
        const array3 = [1, 2, 3];
        const array4 = [10, 20];

        // when
        const result1 = _.zipWith(array1, array2, function (a, b) {
            return a + b;
        });
        const result2 = _.zipWith(array4, array3, function (a, b) {
            return a + b;
        });
        const result3 = _.zipWith(array4, array3, function (a, b) {
            return '' + a + b;
        });

        // then
        expect(result1).toEqual([11, 22, NaN]);
        expect(result2).toEqual([11, 22, NaN]);
        expect(result3).toEqual(['101', '202', 'undefined3']);
        expect(array1).toEqual([1, 2, 3]);
    });
});

