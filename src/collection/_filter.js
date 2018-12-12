import _ from 'lodash';

export function _filter() {
    console.log('#################### _.filter #########################');

    const users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

    const result = _.filter(users, function (o) {
        return !o.active;
    });
    console.log(result);
    // => objects for ['fred']

    // The `_.matches` iteratee shorthand.
    console.log(_.filter(users, {'age': 36, 'active': true}));
    // => objects for ['barney']

    // The `_.matchesProperty` iteratee shorthand.
    console.log(_.filter(users, ['active', false]));
    // => objects for ['fred']

    // The `_.property` iteratee shorthand.
    console.log(_.filter(users, 'active'));
    // => objects for ['barney']
}

