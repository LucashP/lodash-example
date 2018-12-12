import _ from 'lodash';

export function _takeWhile() {
    console.log('#################### _.takeWhile #########################');

    const users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    console.log(_.takeWhile(users, function (o) {
        return !o.active;
    }));
    // => objects for ['barney', 'fred']

    // The `_.matches` iteratee shorthand.
    console.log(_.takeWhile(users, {'user': 'barney', 'active': false}));
    // => objects for ['barney']

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.takeWhile(users, ['active', false]));
    // => objects for ['barney', 'fred']

    // The `_.property` iteratee shorthand.
    console.log(_.takeWhile(users, 'active'));
    // => []
}

