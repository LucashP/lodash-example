import _ from 'lodash';

describe('_.pullAt spec', function () {

    it('should remove elements with provided index', function () {
        // given
        const array = ['a', 'b', 'c', 'd'];

        // when
        const result = _.pullAt(array, [1, 3]);

        // then
        expect(result).toEqual(['b', 'd']);
        expect(array).toEqual(['a', 'c']);
    });
});

