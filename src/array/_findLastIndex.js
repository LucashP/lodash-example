import _ from 'lodash';

export function _findLastIndex() {
    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];

    console.log(_.findLastIndex(users, function (o) {
        return o.user === 'pebbles';
    }));
    // => 2

    // The `_.matches` iteratee shorthand.
    console.log(_.findLastIndex(users, { 'user': 'barney', 'active': true }));
    // => 0

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.findLastIndex(users, ['active', false]));
    // => 2

    // The `_.property` iteratee shorthand.
    console.log(_.findLastIndex(users, 'active'));
    // => 0
}