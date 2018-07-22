import _ from 'lodash';

export function _difference() {
    console.log('#################### _.difference #########################');

    console.log(_.difference([2, 1], [2, 3]));
    console.log(_.difference([], [1, 2, 3]));
    console.log(_.difference([1, 2, 3], []));
    console.log(_.difference([1, 2, 3], [4, 5]));
}