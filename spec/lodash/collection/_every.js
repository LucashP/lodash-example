import _ from 'lodash';

export function _every() {
    console.log('#################### _.every #########################');

    console.log(_.every([true, 1, null, 'yes'], Boolean));
    // => false

    const users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

    // The `_.matches` iteratee shorthand.
    console.log(_.every(users, {'user': 'barney', 'active': false}));
    // => false

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.every(users, ['active', false]));
    // => true

    // The `_.property` iteratee shorthand.
    console.log(_.every(users, 'active'));
    // => false
}

