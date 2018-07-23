import _ from 'lodash';

describe('_.flattenDepth spec', function () {

    it('should flat with depth arrays', function () {
        // given
        const array = [1, [2, [3, [4]], 5]];

        // when
        const result1 = _.flattenDepth(array, 1);
        const result2 = _.flattenDepth(array, 2);

        // then
        expect(result1).toEqual([1, 2, [3, [4]], 5]);
        expect(result2).toEqual([1, 2, 3, [4], 5]);
    });

    it('should flat deep array of objects - another example', function () {
        // given
        const users = [
            [{'user': 'barney', 'active': false}],
            [[{'user': 'fred', 'active': false}], {'user': 'pebbles', 'active': true}]
        ];

        // when
        const result1 = _.flattenDepth(users);
        const result2 = _.flattenDepth(users, 2);
        const result3 = _.flattenDepth(users, 3);

        // then
        expect(result1).toEqual([
            {'user': 'barney', 'active': false},
            [{'user': 'fred', 'active': false}],
            {'user': 'pebbles', 'active': true}
        ]);

        expect(result2).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ]);

        expect(result3).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ]);
    });
});