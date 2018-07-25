import _ from 'lodash';

describe('_.last spec', function () {

    it('should find index of user using custom predicate', function () {
        // given
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3, 4];
        const array3 = [];

        // when
        const result1 = _.last(array1);
        const result2 = _.last(array2);
        const result3 = _.last(array3);

        // then
        expect(result1).toEqual(3);
        expect(result2).toEqual(4);
        expect(result3).toBeUndefined();
    });
});

