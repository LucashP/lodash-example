import _ from 'lodash';

export function _find() {
    console.log('#################### _.find #########################');

    const users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    console.log(_.find(users, function(o) { return o.age < 40; }));
    // => object for 'barney'

    // The `_.matches` iteratee shorthand.
    console.log(_.find(users, { 'age': 1, 'active': true }));
    // => object for 'pebbles'

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.find(users, ['active', false]));
    // => object for 'fred'

    // The `_.property` iteratee shorthand.
    console.log(_.find(users, 'active'));
    // => object for 'barney'
}

