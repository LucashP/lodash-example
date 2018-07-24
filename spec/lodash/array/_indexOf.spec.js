import _ from 'lodash';

describe('_.indexOf spec', function () {

    it('should find index of element', function () {
        // given
        const array1 = [1, 2, 1, 2];
        const array2 = [3, 2, 1, 2];

        // when
        const result1 = _.indexOf(array1, 2);
        const result2 = _.indexOf(array1, 1);
        const result3 = _.indexOf(array2, 1);

        // then
        expect(result1).toEqual(1);
        expect(result2).toEqual(0);
        expect(result3).toEqual(2);
    });

    it('should return -1 if not found element index of element', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.indexOf(array, 4);

        // then
        expect(result).toEqual(-1);
    });

    it('should find index of element from index', function () {
        // given
        const array = [1, 2, 3, 1, 2];

        // when
        const result = _.indexOf(array, 2, 2);

        // then
        expect(result).toEqual(4);
    });
});