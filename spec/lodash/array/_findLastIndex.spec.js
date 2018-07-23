import _ from 'lodash';

describe('_.findLastIndex spec', function () {

    it('should find last index of user using custom predicate', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result = _.findLastIndex(users, function (o) {
            return o.user === 'pebbles';
        });

        // then
        expect(result).toEqual(2);
    });

    it('should find last index of user using _.matches or _.matchesProperty methods', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result1 = _.findLastIndex(users, {'user': 'barney', 'active': true});
        const result2 = _.findLastIndex(users, ['active', false]);

        // then
        expect(result1).toEqual(0);
        expect(result2).toEqual(2);
    });

    it('should find index of user using _.property method', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result = _.findLastIndex(users, 'active');

        // then
        expect(result).toEqual(0);
    });
});