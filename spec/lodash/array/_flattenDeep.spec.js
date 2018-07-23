import _ from 'lodash';

describe('_.flattenDeep spec', function () {

    it('should flat deep arrays', function () {
        // given
        const array1 = [1, [2, [3, [4]], 5]];
        const array2 = [1, [2, [[3], [4]], [5]]];

        // when
        const result1 = _.flattenDeep(array1);
        const result2 = _.flattenDeep(array2);

        // then
        expect(result1).toEqual([1, 2, 3, 4, 5]);
        expect(result2).toEqual([1, 2, 3, 4, 5]);
    });

    it('should flat deep array of objects - another example', function () {
        // given
        const users = [
            [{'user': 'barney', 'active': false}],
            [[{'user': 'fred', 'active': false}], {'user': 'pebbles', 'active': true}]
        ];

        // when
        const result = _.flattenDeep(users);

        // then
        expect(result).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ]);
    });
});