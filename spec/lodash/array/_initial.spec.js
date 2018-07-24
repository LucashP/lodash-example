import _ from 'lodash';

describe('_.initial spec', function () {

    it('should retrieve array without last element of provided array', function () {
        // given
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3, 4];
        const array3 = [1];

        // when
        const result1 = _.initial(array1);
        const result2 = _.initial(array2);
        const result3 = _.initial(array3);

        // then
        expect(result1).toEqual([1, 2]);
        expect(result2).toEqual([1, 2, 3]);
        expect(result3).toEqual([]);
    });

    it('should retrieve empty array for provided empty array', function () {
        // given
        const array = [];

        // when
        const result = _.initial(array);

        // then
        expect(result).toEqual([]);
    });

    it('should be untouched provided array after initial method', function () {
        // given
        const array = [1, 2];

        // when
        const result = _.initial(array);

        // then
        expect(result).toEqual([1]);
        expect(array).toEqual([1, 2]);
    });
});

