import _ from 'lodash';

describe('_.intersection spec', function () {

    it('should find intersection for two sets', function () {
        // when
        const result1 = _.intersection([2, 1], [2, 3]);
        const result2 = _.intersection([3, 2, 1], [2, 3]);
        const result3 = _.intersection([3, 2, 1], [1, 2, 3]);

        // then
        expect(result1).toEqual([2]);
        expect(result2).toEqual([3, 2]);
        expect(result3).toEqual([3, 2, 1]);
    });

    it('should return empty set if one of two sets is empty', function () {
        // given
        const array1 = [1, 2, 3];
        const array2 = [];

        // when
        const result = _.intersection(array1, array2);

        // then
        expect(result).toEqual([]);
    });

    it('should return empty set if sets are nested', function () {
        // when
        const result1 = _.intersection([[2], 1], [[2], 3]);
        const result2 = _.intersection([[2], 1], [2, 3]);

        // then
        expect(result1).toEqual([]);
        expect(result2).toEqual([]);
    });
});

