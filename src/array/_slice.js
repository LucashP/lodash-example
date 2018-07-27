import _ from 'lodash';

export function _slice() {
    console.log('#################### _.slice #########################');

    const array = [1, 2, 3, 4, 5];

    console.log(_.slice(array, 1));
    // => [2, 3, 4, 5]

    console.log(_.slice(array, 1, 3));
    // => [2, 3]

    console.log(_.slice(array, -2));
    // => [4,5]

    console.log(_.slice(array, -1));
    // => [4]

    console.log(array);
}

