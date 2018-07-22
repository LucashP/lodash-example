import _ from 'lodash';

describe('_.dropRightWhile spec', function () {

    it('should drop elements which fulfill predicate (users not active)', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result = _.dropRightWhile(users, function (o) {
            return !o.active;
        });

        // then
        expect(result).toEqual([{'user': 'barney', 'active': true}]);
    });

    it('should drop elements which fulfill predicate (with _.matches method)', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result1 = _.dropRightWhile(users, {'user': 'pebbles', 'active': false});
        const result2 = _.dropRightWhile(users, _.matches({'user': 'pebbles', 'active': false}));

        // then
        expect(result1).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false}
        ]);

        expect(result2).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false}
        ]);
    });

    it('should drop elements which fulfill predicate (with _.matchesProperty method)', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result1 = _.dropRightWhile(users, ['active', false]);
        const result2 = _.dropRightWhile(users, _.matchesProperty('active', false));

        // then
        expect(result1).toEqual([
            {'user': 'barney', 'active': true}
        ]);

        expect(result2).toEqual([
            {'user': 'barney', 'active': true}
        ]);
    });

    it('should drop elements which fulfill predicate (with _.property method)', function () {
        // given
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ];

        // when
        const result1 = _.dropRightWhile(users, 'active');
        const result2 = _.dropRightWhile(users, _.property('active'));

        // then
        expect(result1).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ]);

        expect(result2).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': false}
        ]);
    });

});
