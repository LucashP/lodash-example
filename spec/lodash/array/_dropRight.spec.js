import _ from 'lodash';

describe('_.dropRight spec', function () {

    it('should drop last element from array (default behaviour)', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.dropRight(array);

        // then
        expect(result).toEqual([1, 2]);
    });

    it('should drop two elements from ending', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.dropRight(array, 2);

        // then
        expect(result).toEqual([1]);
    });


    it('should retrieve empty array during dropping more elements than array length', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.dropRight(array, 5);

        // then
        expect(result).toEqual([]);
    });

    it('should drop no elements', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.dropRight(array, 0);

        // then
        expect(result).toEqual(array);
    });
});

