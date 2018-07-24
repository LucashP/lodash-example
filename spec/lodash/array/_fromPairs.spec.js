import _ from 'lodash';

describe('_.fromPairs spec', function () {

    it('should create key value object from array with two dimensional array elements', function () {
        // given
        const array1 = [['a', 1], ['b', 2]];
        const array2 = [['a', 1, 'test1'], ['b', 2, 'test2']];
        const array3 = [['a', 'test1', 1], ['b', 'test2', 2]];

        // when
        const result1 = _.fromPairs(array1);
        const result2 = _.fromPairs(array2);
        const result3 = _.fromPairs(array3);

        // then
        expect(result1).toEqual({'a': 1, 'b': 2});
        expect(result2).toEqual({'a': 1, 'b': 2});
        expect(result3).toEqual({'a': 'test1', 'b': 'test2'});
    });
});
