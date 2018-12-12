import _ from 'lodash';

describe('_.xorBy spec', function () {

    fit('should create symmetric difference of given arrays with provided strategy', function () {
        // given
        const array1 = [2.1, 1.2];
        const array2 = [2.3, 3.4];

        const array3 = [{'x': 1}];
        const array4 = [{'x': 2}, {'x': 1}];

        const array5 = [1, 2, 4, 5, 7, 8, 11, 12, 14, 22, 23];
        const array6 = [5, 6, 8, 9, 10, 11, 12, 23, 44, 55];

        // when
        const result1 = _.xorBy(array1, array2, Math.floor);
        const result2 = _.xorBy(array3, array4, 'x');
        const result3 = _.xorBy(array5, array6, function (value) {
            return value % 2 === 0 ? value : null;
        });
        console.log(result3)

        // then
        expect(result1).toEqual([1.2, 3.4]);
        expect(result2).toEqual([{'x': 2}]);
        expect(result3).toEqual([1.2, 3.4]);
    });
});