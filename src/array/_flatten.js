import _ from 'lodash';

export function _flatten() {
    console.log(_.flatten([1, [2, [3, [4]], 5]]));
    // => [1, 2, [3, [4]], 5]

    console.log(_.flatten([1, [2, [[3], [4]], [5]]]));
    // => [1, 2, [[3], [4]], [5]]

    const users = [
        [{'user': 'barney', 'active': false}],
        [[{'user': 'fred', 'active': false}], {'user': 'pebbles', 'active': true}]
    ];

    console.log(_.flatten(users));
}