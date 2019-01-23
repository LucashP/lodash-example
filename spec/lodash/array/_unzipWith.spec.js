import _ from 'lodash';

describe('_.unzipWith spec', function () {

    it('should create array with regrouped elements with provided strategy - same dimension', function () {
        // given
        const array = [['a', 1], [2, 'b']];

        // when
        const result1 = _.unzipWith(array, _.add);
        const result2 = _.unzipWith(array, function (...params) {
            return _.add(...params);
        });
        const result3 = _.unzipWith(array, function (...params) {
            return _.reverse(params);
        });

        // then
        expect(array).toEqual([['a', 1], [2, 'b']]);
        expect(result1).toEqual(['a2', '1b']);
        expect(result2).toEqual(['a2', '1b']);
        expect(result3).toEqual([[2, 'a'], ['b', 1]]);
    });

    it('should create array with regrouped elements with provided strategy - different dimension of elements', function () {
        // given
        const array = [[1, 2], [10, 20, 40], [100, 200], [1000, 2000, 3000]];

        // when
        const result = _.unzipWith(array, function (...params) {
            return params;
        });

        // then
        expect(array).toEqual([[1, 2], [10, 20, 40], [100, 200], [1000, 2000, 3000]]);
        expect(result).toEqual([[1, 10, 100, 1000], [2, 20, 200, 2000], [undefined, 40, undefined, 3000]]);
        expect(result).toEqual(_.unzip(array));
    });
});