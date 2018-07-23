import _ from 'lodash';

export function _flattenDepth() {
    console.log('#################### _.flattenDepth #########################');
    
    const array = [1, [2, [3, [4]], 5]];

    console.log(_.flattenDepth(array, 1));
    // => [1, 2, [3, [4]], 5]

    console.log(_.flattenDepth(array, 2));
    // => [1, 2, 3, [4], 5]

    const users = [
        [{'user': 'barney', 'active': false}],
        [[{'user': 'fred', 'active': false}], {'user': 'pebbles', 'active': true}]
    ];

    console.log(_.flattenDepth(users));
    console.log(_.flattenDepth(users, 2));
    console.log(_.flattenDepth(users, 3));
}