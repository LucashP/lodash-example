const _ = require('lodash');

describe('_.chunk spec', function () {

    it('should split to two arrays with two elements', function () {
        // given
        let array = ['a', 'b', 'c', 'd'];

        // when
        let actual = _.chunk(array, 2);

        // then
        expect(actual).toEqual([['a', 'b'], ['c', 'd']]);
    });

    it('should split to array with three elements and array with one element', function () {
        // given
        let array = ['a', 'b', 'c', 'd'];

        // when
        let actual = _.chunk(array, 3);

        // then
        expect(actual).toEqual([['a', 'b', 'c'], ['d']]);
    });

    it('should split to arrays of array with one element', function () {
        // given
        let array = ['a', 'b', 'c', 'd'];

        // when
        let actual = _.chunk(array, 1);

        // then
        expect(actual).toEqual([['a'], ['b'], ['c'], ['d']]);
    });

    it('should split to two arrays with two elements and array with one element', function () {
        // given
        let array = ['a', 'b', 'c', 'd', 'e'];

        // when
        let actual = _.chunk(array, 2);

        // then
        expect(actual).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    });
});