import _ from 'lodash';

export function _takeRightWhile() {
    console.log('#################### _.takeRightWhile #########################');

    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];

    console.log(_.takeRightWhile(users, function(o) { return !o.active; }));
    // => objects for ['fred', 'pebbles']

    // The `_.matches` iteratee shorthand.
    console.log(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }));
    // => objects for ['pebbles']

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.takeRightWhile(users, ['active', false]));
    // => objects for ['fred', 'pebbles']

    // The `_.property` iteratee shorthand.
    console.log(_.takeRightWhile(users, 'active'));
    // => []
}

