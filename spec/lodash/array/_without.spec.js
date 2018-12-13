import _ from 'lodash';

describe('_.without spec', function () {

    it('should exclude all given values', function () {
        // given
        const array1 = [2, 1, 2, 3];

        // when
        const result1 = _.without(array1, 1, 2);
        const result2 = _.without(array1, [1, 2]);
        const result3 = _.without(array1, 3, 1);
        const result4 = _.without(array1);

        // then
        expect(array1).toEqual([2, 1, 2, 3]);
        expect(result1).toEqual([3]);
        expect(result2).toEqual([2, 1, 2, 3]);
        expect(result3).toEqual([2, 2]);
        expect(result4).toEqual([2, 1, 2, 3]);
    });
});