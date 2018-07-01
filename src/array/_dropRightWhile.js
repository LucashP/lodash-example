import _ from 'lodash';

export function _dropRightWhile() {
    let users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];

    console.log(_.dropRightWhile(users, function (o) {
        return !o.active;
    }));

    // The `_.matches` iteratee shorthand.
    console.log(_.dropRightWhile(users, {'user': 'pebbles', 'active': false}));
    console.log(_.dropRightWhile(users, _.matches({'user': 'pebbles', 'active': false})));

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.dropRightWhile(users, ['active', false]));
    console.log(_.dropRightWhile(users, _.matchesProperty('active', false)));

    // The `_.property` iteratee shorthand.
    console.log(_.dropRightWhile(users, 'active'));
    console.log(_.dropRightWhile(users, _.property('active')));
}
