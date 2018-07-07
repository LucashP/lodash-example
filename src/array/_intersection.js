import _ from 'lodash';

export function _intersection() {
    console.log('#################### _.intersection #########################');

    console.log(_.intersection([2, 1], [2, 3]));
    // => [2]

    console.log(_.intersection([3, 2, 1], [2, 3]));
    // => [3, 2]

    console.log(_.intersection([3, 2, 1], [1, 2, 3]));
    // => [3, 2, 1]

    console.log(_.intersection([], [1, 2, 3]));
    // => []

    console.log(_.intersection([[2], 1], [[2], 3]));
    // => []

    console.log(_.intersection([[2], 1], [2, 3]));
    // => []
}

