import _ from 'lodash';

describe('_.findIndex spec', function () {

    it('should find index of user using custom predicate', function () {
        // given
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ];

        // when
        const result = _.findIndex(users, function (o) {
            return o.user === 'barney';
        });

        // then
        expect(result).toEqual(0);
    });

    it('should find index of user using _.matches or _.matchesProperty methods', function () {
        // given
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ];

        // when
        const result1 = _.findIndex(users, {'user': 'fred', 'active': false});
        const result2 = _.findIndex(users, ['active', false]);

        // then
        expect(result1).toEqual(1);
        expect(result2).toEqual(0);
    });

    it('should find index of user using _.property method', function () {
        // given
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true}
        ];

        // when
        const result = _.findIndex(users, 'active');

        // then
        expect(result).toEqual(2);
    });
});

