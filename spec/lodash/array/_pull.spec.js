import _ from 'lodash';

describe('_.pull spec', function () {

    it('should remove all elements listed as param in method', function () {
        // given
        const array = ['a', 'b', 'c', 'a', 'b', 'c'];

        // when
        const result = _.pull(array, 'a', 'c');

        // then
        expect(result).toEqual(['b', 'b']);
        expect(array).toEqual(['b', 'b']);
    });

    it('should not remove elements listed as array param in method', function () {
        // given
        const array = ['a', 'b', 'c', 'a'];

        // when
        const result = _.pull(array, ['a', 'c']);

        // then
        expect(result).toEqual(['a', 'b', 'c', 'a']);
        expect(array).toEqual(['a', 'b', 'c', 'a']);
    });
});

