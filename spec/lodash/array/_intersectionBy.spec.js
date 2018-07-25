import _ from 'lodash';

describe('_.intersectionBy spec', function () {

    it('should find intersection for two sets with Math.floor predicate', function () {
        // when
        const result1 = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        const result2 = _.intersectionBy([2.3, 1.2], [2.1, 3.4], Math.floor);

        // then
        expect(result1).toEqual([2.1]);
        expect(result2).toEqual([2.3]);
    });

    it('should find intersection for two sets with property predicate', function () {
        // when
        const result = _.intersectionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x');

        // then
        expect(result).toEqual([{'x': 1}]);
    });
});

