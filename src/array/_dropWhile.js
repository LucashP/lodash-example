import _ from 'lodash';

export function _dropWhile() {
    console.log('#################### _.dropWhile #########################');

    let users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true},
        {'user': 'barney', 'active': false}
    ];

    console.log(_.dropWhile(users, function (o) {
        return !o.active;
    }));

    // The `_.matches` iteratee shorthand.
    console.log(_.dropWhile(users, {'user': 'pebbles', 'active': false}));
    console.log(_.dropWhile(users, _.matches({'user': 'pebbles', 'active': false})));

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.dropWhile(users, ['active', false]));
    console.log(_.dropWhile(users, _.matchesProperty('active', false)));

    // The `_.property` iteratee shorthand.
    console.log(_.dropWhile(users, 'active'));
    console.log(_.dropWhile(users, _.property('active')));
}
