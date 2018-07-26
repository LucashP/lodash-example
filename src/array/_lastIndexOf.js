import _ from 'lodash';

export function _lastIndexOf() {
    console.log('#################### _.lastIndexOf #########################');

    console.log(_.lastIndexOf([1, 2, 1, 2], 2));
    // => 3

    // Search from the `fromIndex`.
    console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));
    // => 1
}

