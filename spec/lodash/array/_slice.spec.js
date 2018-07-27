import _ from 'lodash';

describe('_.slice spec', function () {

    it('should retrieve array by slice method', function () {
        // given
        const array = [1, 2, 3, 4, 5];

        // when
        const result1 = _.slice(array, 1);
        const result2 = _.slice(array, 1, 3);
        const result3 = _.slice(array, -2);
        const result4 = _.slice(array, -1);

        // then
        expect(result1).toEqual([2, 3, 4, 5]);
        expect(result2).toEqual([2, 3]);
        expect(result3).toEqual([4, 5]);
        expect(result4).toEqual([5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});

