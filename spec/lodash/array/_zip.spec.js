import _ from 'lodash';

describe('_.zip spec', function () {

    it('should zip arrays - same dimensions', function () {
        // given
        const array1 = ['a', 'b'];
        const array2 = [1, 2];
        const array3 = [true, false];

        // when
        const result = _.zip(array1, array2, array3);

        // then
        expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
    });

    it('should zip arrays - different dimensions', function () {
        // given
        const array1 = ['a', 'b'];
        const array2 = [1, 2, 3];
        const array3 = [true];

        // when
        const result = _.zip(array1, array2, array3);

        // then
        expect(result).toEqual([['a', 1, true], ['b', 2, undefined], [undefined, 3, undefined]]);
    });
});

