import _ from 'lodash';

export function _takeRight() {
    console.log('#################### _.takeRight #########################');

    console.log(_.takeRight([1, 2, 3]));
    // => [3]

    console.log(_.takeRight([1, 2, 3], 2));
    // => [2, 3]

    console.log(_.takeRight([1, 2, 3], 5));
    // => [1, 2, 3]

    console.log(_.takeRight([1, 2, 3], 0));
    // => []
}

