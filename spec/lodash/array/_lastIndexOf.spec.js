import _ from 'lodash';

describe('_.lastIndexOf spec', function () {

    it('should retrieve last index of provided element', function () {
        // given
        const array = [1, 2, 1, 2];

        // when
        const result = _.lastIndexOf(array, 2);

        // then
        expect(result).toEqual(3);
    });

    it('should retrieve last index of provided element from starting point', function () {
        // given
        const array1 = [1, 2, 1, 2];
        const array2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

        // when
        const result1 = _.lastIndexOf(array1, 2, 2);
        const result2 = _.lastIndexOf(array2, 4, 8);
        const result3 = _.lastIndexOf(array2, 4, 2);
        const result4 = _.lastIndexOf(array2, 4, 3);

        // then
        expect(result1).toEqual(1);
        expect(result2).toEqual(8);
        expect(result3).toEqual(-1);
        expect(result4).toEqual(3);
    });
});

