import _ from 'lodash';

export function _findIndex() {
    console.log('#################### _.findIndex #########################');

    const users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    console.log(_.findIndex(users, function (o) {
        return o.user === 'barney';
    }));
    // => 0

    // The `_.matches` iteratee shorthand.
    console.log(_.findIndex(users, {'user': 'fred', 'active': false}));
    // => 1

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.findIndex(users, ['active', false]));
    // => 0

    // The `_.property` iteratee shorthand.
    console.log(_.findIndex(users, 'active'));
    // => 2
}