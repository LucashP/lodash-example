import _ from 'lodash';

export function _indexOf() {
    console.log('#################### _.indexOf #########################');

    console.log(_.indexOf([1, 2, 1, 2], 2));
    // => 1

    console.log(_.indexOf([1, 2, 1, 2], 1));
    // => 0

    console.log(_.indexOf([3, 2, 1, 2], 1));
    // => 2

    // Search from the `fromIndex`.
    console.log(_.indexOf([1, 2, 3, 1, 2], 2, 2));
    // => 4
}