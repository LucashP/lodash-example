import _ from 'lodash';

describe('_.head spec', function () {

    it('should find index of user using custom predicate', function () {
        // given
        const array1 = [1, 2, 3];
        const array2 = [];

        // when
        const result1 = _.head(array1);
        const result2 = _.head(array2);

        // then
        expect(result1).toEqual(1);
        expect(result2).toBeUndefined();
    });
});