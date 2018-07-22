import _ from 'lodash';

describe('_.drop spec', function () {

    it('should drop first element from array (default behaviour)', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.drop(array);

        // then
        expect(result).toEqual([2, 3]);
    });

    it('should drop two elements from beginning', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.drop(array, 2);

        // then
        expect(result).toEqual([3]);
    });


    it('should retrieve empty array during dropping more elements than array length', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.drop(array, 5);

        // then
        expect(result).toEqual([]);
    });

    it('should drop no elements', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.drop(array, 0);

        // then
        expect(result).toEqual(array);
    });

    it('should be untouched array which was used to dropping elements', function () {
        // given
        const array = [1, 2, 3, 4, 5];

        // when
        const result = _.drop(array, 3);

        // then
        expect(result).toEqual([4, 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

});

