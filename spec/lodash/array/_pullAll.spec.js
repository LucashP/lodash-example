import _ from 'lodash';

describe('_.pullAll spec', function () {

    it('should not remove elements listed as param in method', function () {
        // given
        const array1 = ['a', 'b', 'c', 'a'];
        const array2 = ['a', 'b', 'c', 'a'];

        // when
        const result1 = _.pullAll(array1, 'a', 'c'); // get only first param and treat as ['a']
        const result2 = _.pullAll(array2, ['a']);

        // then
        expect(result1).toEqual(['b', 'c']);
        expect(array1).toEqual(['b', 'c']);
        expect(result2).toEqual(['b', 'c']);
        expect(array2).toEqual(['b', 'c']);
    });

    it('should remove elements listed as array param in method', function () {
        // given
        const array = ['a', 'b', 'c', 'a', 'b', 'c'];

        // when
        const result = _.pullAll(array, ['a', 'c']);

        // then
        expect(result).toEqual(['b', 'b']);
        expect(array).toEqual(['b', 'b']);
    });
});